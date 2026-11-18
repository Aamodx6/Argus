import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import ts from 'typescript';
import { test } from 'node:test';

const require = createRequire(import.meta.url);

function loadTsModule(relativePath, mocks = {}, env = {}) {
  const filename = new URL(relativePath, import.meta.url);
  const output = ts.transpileModule(readFileSync(filename, 'utf8'), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
  }).outputText;
  const exports = {};
  vm.runInNewContext(output, {
    exports,
    Buffer,
    console,
    Request,
    Response,
    URL,
    process: { env },
    require: (name) => (name in mocks ? mocks[name] : require(name)),
  });
  return exports;
}

function loadRazorpayLib(env = {}, mockRazorpayClass) {
  const mocks = mockRazorpayClass ? { razorpay: mockRazorpayClass } : {};
  return loadTsModule('../src/lib/razorpay.ts', mocks, env);
}

test('create-order validates minimum amount >= 100 paise and rejects malformed payloads', async () => {
  const lib = loadRazorpayLib({ RAZORPAY_KEY_ID: 'rzp_test_key', RAZORPAY_KEY_SECRET: 'secret_val' });
  const route = loadTsModule('../src/app/api/create-order/route.ts', { '~/lib/razorpay': lib });

  for (const payload of [
    JSON.stringify({ amount: 99, currency: 'INR' }),
    JSON.stringify({ amount: 0, currency: 'INR' }),
    JSON.stringify({ amount: 150.5, currency: 'INR' }),
    JSON.stringify({ currency: 'INR' }),
    'not-json',
  ]) {
    const res = await route.POST(
      new Request('http://local/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
      }),
    );
    assert.equal(res.status, 400);
  }
});

test('create-order returns 401 when credentials are missing or rejected by Razorpay', async () => {
  const missingLib = loadRazorpayLib({});
  const missingRoute = loadTsModule('../src/app/api/create-order/route.ts', { '~/lib/razorpay': missingLib });
  const missingRes = await missingRoute.POST(
    new Request('http://local/api/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 50000, currency: 'INR' }),
    }),
  );
  assert.equal(missingRes.status, 401);

  class AuthFailRazorpay {
    orders = {
      async create() {
        const err = { statusCode: 401, error: { code: 'BAD_REQUEST_ERROR', description: 'Authentication failed' } };
        throw err;
      },
    };
  }
  const authFailLib = loadRazorpayLib(
    { RAZORPAY_KEY_ID: 'rzp_test_bad', RAZORPAY_KEY_SECRET: 'bad_secret' },
    AuthFailRazorpay,
  );
  const authFailRoute = loadTsModule('../src/app/api/create-order/route.ts', { '~/lib/razorpay': authFailLib });
  const authFailRes = await authFailRoute.POST(
    new Request('http://local/api/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 50000, currency: 'INR' }),
    }),
  );
  assert.equal(authFailRes.status, 401);
});

test('create-order returns 500 on unexpected Razorpay API errors and 200 with order_id on success', async () => {
  class ErrorRazorpay {
    orders = {
      async create() {
        throw new Error('Gateway timeout');
      },
    };
  }
  const errLib = loadRazorpayLib(
    { RAZORPAY_KEY_ID: 'rzp_test_key', RAZORPAY_KEY_SECRET: 'secret_val' },
    ErrorRazorpay,
  );
  const errRoute = loadTsModule('../src/app/api/create-order/route.ts', { '~/lib/razorpay': errLib });
  const errRes = await errRoute.POST(
    new Request('http://local/api/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 50000, currency: 'INR' }),
    }),
  );
  assert.equal(errRes.status, 500);

  let receivedOptions;
  class OkRazorpay {
    orders = {
      async create(opts) {
        receivedOptions = opts;
        return { id: 'order_Test123456', amount: opts.amount, currency: opts.currency, receipt: opts.receipt };
      },
    };
  }
  const okLib = loadRazorpayLib(
    { RAZORPAY_KEY_ID: 'rzp_test_key', RAZORPAY_KEY_SECRET: 'secret_val' },
    OkRazorpay,
  );
  const okRoute = loadTsModule('../src/app/api/create-order/route.ts', { '~/lib/razorpay': okLib });
  const okRes = await okRoute.POST(
    new Request('http://local/api/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 299900, currency: 'INR', receipt: 'order_rcpt_1' }),
    }),
  );
  assert.equal(okRes.status, 200);
  const data = await okRes.json();
  assert.equal(data.order_id, 'order_Test123456');
  assert.equal(data.amount, 299900);
  assert.equal(data.currency, 'INR');
  assert.equal(receivedOptions.receipt, 'order_rcpt_1');
});

test('verify-payment rejects missing fields, rejects invalid signature, and accepts valid HMAC-SHA256', async () => {
  const secret = 'test_webhook_secret_key';
  const lib = loadRazorpayLib({ RAZORPAY_KEY_SECRET: secret });
  const route = loadTsModule('../src/app/api/verify-payment/route.ts', { '~/lib/razorpay': lib });

  const missingRes = await route.POST(
    new Request('http://local/api/verify-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ razorpay_order_id: 'order_1' }),
    }),
  );
  assert.equal(missingRes.status, 400);
  assert.equal((await missingRes.json()).verified, false);

  const orderId = 'order_Test999';
  const paymentId = 'pay_Test888';
  const validSignature = crypto
    .createHmac('sha256', secret)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');

  const badRes = await route.POST(
    new Request('http://local/api/verify-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        razorpay_order_id: orderId,
        razorpay_payment_id: paymentId,
        razorpay_signature: '0'.repeat(64),
      }),
    }),
  );
  assert.equal(badRes.status, 400);
  assert.equal((await badRes.json()).verified, false);

  const okRes = await route.POST(
    new Request('http://local/api/verify-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        razorpay_order_id: orderId,
        razorpay_payment_id: paymentId,
        razorpay_signature: validSignature,
      }),
    }),
  );
  assert.equal(okRes.status, 200);
  const okBody = await okRes.json();
  assert.equal(okBody.verified, true);
  assert.equal(okBody.order_id, orderId);
  assert.equal(okBody.payment_id, paymentId);
});
