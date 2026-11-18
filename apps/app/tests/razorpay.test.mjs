import assert from 'node:assert/strict';
import { createHash, createHmac } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const secret = 'unit-test-secret';
const keyId = 'rzp_test_fixture';
const orderId = 'order_TestOrder';
const paymentId = 'pay_TestPayment';
const amount = 299900;
const owner = createHash('sha256').update('owner').digest('hex');
const validOrder = { id: orderId, amount, currency: 'INR', notes: { owner, purpose: 'argus-pricing' } };
const validOrderInput = { amount, currency: 'INR', receipt: 'test-receipt' };
const signedPayment = {
  razorpay_order_id: orderId,
  razorpay_payment_id: paymentId,
  razorpay_signature: createHmac('sha256', secret).update(orderId + '|' + paymentId).digest('hex'),
};

function load(file, modules, env = {}) {
  const source = readFileSync(new URL('../src/' + file, import.meta.url), 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  });
  const exports = {};
  runInNewContext(outputText, {
    exports, Request, Response, Buffer, process: { env },
    console: { error() {} },
    require: specifier => modules[specifier] ?? require(specifier),
  });
  return exports;
}

function endpoints({
  userId = 'owner', create, fetchOrder, fetchPayment, savePurchase, loadPurchase = async () => null, configured = true,
} = {}) {
  const backend = load('server/razorpay.ts', {
    razorpay: class {
      orders = { create, fetch: fetchOrder };
      payments = { fetch: fetchPayment };
    },
  }, configured ? { RAZORPAY_KEY_ID: keyId, RAZORPAY_KEY_SECRET: secret } : {});
  const modules = {
    '~/server/razorpay': backend,
    '~/server/auth': { auth: async () => userId ? { user: { id: userId } } : null },
    '~/server/db': { db: { planPurchase: { createMany: savePurchase, findFirst: loadPurchase } } },
  };
  return {
    create: load('app/api/create-order/route.ts', modules).POST,
    verify: load('app/api/verify-payment/route.ts', modules).POST,
  };
}

function request(body, contentType = 'application/json') {
  return new Request('http://local/api/checkout', {
    method: 'POST', headers: { 'Content-Type': contentType }, body: JSON.stringify(body),
  });
}

test('creating a test order validates auth, amount, currency and JSON before calling Razorpay', async () => {
  const anonymous = endpoints({ userId: null });
  assert.equal((await anonymous.create(request(validOrderInput))).status, 401);
  const { create } = endpoints({ create: () => assert.fail('Invalid orders must not reach Razorpay') });
  for (const data of [{ ...validOrderInput, amount: 99 }, { ...validOrderInput, amount: 100 },
    { ...validOrderInput, amount: 299900.5 }, { ...validOrderInput, currency: 'USD' },
    { ...validOrderInput, receipt: 'x'.repeat(41) }]) {
    assert.equal((await create(request(data))).status, 400);
  }
  assert.equal((await create(request(validOrderInput, 'text/plain'))).status, 400);
  assert.equal((await endpoints({ configured: false }).create(request(validOrderInput))).status, 503);
});

test('checkout returns only public order data and binds the order to the signed-in user', async () => {
  const { create } = endpoints({ create: async data => {
    assert.deepEqual(JSON.parse(JSON.stringify(data)), { ...validOrderInput, notes: validOrder.notes });
    return validOrder;
  } });
  const response = await create(request(validOrderInput));
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.deepEqual(await response.json(), { order_id: orderId, amount, currency: 'INR', key_id: keyId });
  const failed = endpoints({ create: async () => { throw { statusCode: 502 }; } });
  assert.equal((await failed.create(request(validOrderInput))).status, 500);
  const unavailable = endpoints({
    loadPurchase: async () => { throw new Error('Plan storage unavailable'); },
    create: async () => assert.fail('Orders require plan storage'),
  });
  assert.equal((await unavailable.create(request(validOrderInput))).status, 503);
});

test('verification requires a valid signature for the server-fetched order and its owner', async () => {
  const purchases = [];
  let status = 'authorized';
  const { verify } = endpoints({ fetchOrder: async id => {
    assert.equal(id, orderId);
    return validOrder;
  }, fetchPayment: async id => {
    assert.equal(id, paymentId);
    return { order_id: orderId, amount, currency: 'INR', status };
  }, savePurchase: async input => { purchases.push(JSON.parse(JSON.stringify(input))); } });
  assert.equal((await verify(request({ razorpay_order_id: orderId }))).status, 400);
  assert.equal((await verify(request({ ...signedPayment, razorpay_signature: 'a'.repeat(64) }))).status, 400);
  assert.equal((await verify(request({ ...signedPayment, razorpay_payment_id: 'pay_Different' }))).status, 400);
  const other = endpoints({ userId: 'different-owner', fetchOrder: async () => validOrder });
  assert.equal((await other.verify(request(signedPayment))).status, 400);
  assert.equal((await verify(request(signedPayment))).status, 409);
  assert.deepEqual(purchases, []);
  status = 'captured';
  assert.deepEqual(await (await verify(request(signedPayment))).json(), { success: true });
  assert.deepEqual(purchases, [{ data: { orderId, userId: 'owner', plan: 'STARTER' }, skipDuplicates: true }]);
});

test('paid plans expire after a calendar month, including short months', () => {
  const { activePlan } = load('server/plan-period.ts', {});
  const purchases = [{ plan: 'PROFESSIONAL', createdAt: new Date('2026-01-31T10:00:00Z') }];
  const before = activePlan(purchases, new Date('2026-02-28T09:59:59Z'));
  assert.equal(before.plan, 'PROFESSIONAL');
  assert.equal(before.expiresAt.toISOString(), '2026-02-28T10:00:00.000Z');
  const expired = activePlan(purchases, new Date('2026-02-28T10:00:00Z'));
  assert.equal(expired.plan, 'STARTER');
  assert.equal(expired.expiresAt, null);
});

test('an early renewal extends the paid period and the latest active purchase sets the tier', () => {
  const { activePlan } = load('server/plan-period.ts', {});
  const purchases = [
    { plan: 'BUSINESS', createdAt: new Date('2026-10-01T00:00:00Z') },
    { plan: 'BUSINESS', createdAt: new Date('2026-10-15T00:00:00Z') },
    { plan: 'STARTER', createdAt: new Date('2026-10-18T00:00:00Z') },
  ];
  const starter = activePlan(purchases, new Date('2026-10-19T00:00:00Z'));
  assert.equal(starter.plan, 'STARTER');
  assert.equal(starter.expiresAt.toISOString(), '2026-11-18T00:00:00.000Z');
  const business = activePlan(purchases, new Date('2026-11-19T00:00:00Z'));
  assert.equal(business.plan, 'BUSINESS');
  assert.equal(business.expiresAt.toISOString(), '2026-12-01T00:00:00.000Z');
});
