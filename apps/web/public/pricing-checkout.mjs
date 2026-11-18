import { monthlyPlans } from './pricing-content.mjs';

const feedback = document.getElementById('pricing-checkout-feedback');
const status = document.getElementById('pricing-checkout-status');
const login = document.getElementById('pricing-checkout-login');
let active = false;
let checkoutScript;

function announce(message, signIn = false) {
  feedback.hidden = false;
  status.textContent = message;
  login.hidden = !signIn;
}

async function post(path, body) {
  const response = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw Object.assign(new Error(result.error || 'Checkout is unavailable. Try again.'), { status: response.status, code: result.code });
  }
  return result;
}

async function verifyPayment(payment) {
  for (let attempt = 0; ; attempt++) {
    try {
      return await post('/api/verify-payment', payment);
    } catch (error) {
      if (error.code !== 'PAYMENT_PENDING' || attempt === 5) throw error;
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
}

function loadCheckout() {
  if (typeof window.Razorpay === 'function') return Promise.resolve(window.Razorpay);
  checkoutScript ??= new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => {
      if (typeof window.Razorpay === 'function') resolve(window.Razorpay);
      else reject(new Error('Could not load Razorpay Checkout. Try again.'));
    };
    script.onerror = () => reject(new Error('Could not load Razorpay Checkout. Try again.'));
    document.head.append(script);
  }).catch(error => {
    checkoutScript = undefined;
    throw error;
  });
  return checkoutScript;
}

async function openCheckout(button, plan) {
  active = true;
  button.disabled = true;
  let receivedPayment = false;
  let paymentFailed = false;
  const release = () => { active = false; button.disabled = false; };
  try {
    announce('Preparing test checkout…');
    const order = await post('/api/create-order', {
      amount: plan.monthly * 100, currency: 'INR', receipt: crypto.randomUUID(),
    });
    const Razorpay = await loadCheckout();
    const checkout = new Razorpay({
      key: order.key_id,
      order_id: order.order_id,
      amount: order.amount,
      currency: order.currency,
      name: 'Argus',
      description: plan.name + ' monthly plan (test)',
      theme: { color: '#b54919' },
      modal: {
        ondismiss() {
          if (receivedPayment) return;
          announce(paymentFailed ? 'Test payment failed. You can try again.' : 'Checkout cancelled.');
          release();
        },
      },
      async handler({ razorpay_order_id, razorpay_payment_id, razorpay_signature }) {
        if (receivedPayment) return;
        receivedPayment = true;
        announce('Verifying test payment…');
        try {
          const result = await verifyPayment({ razorpay_order_id, razorpay_payment_id, razorpay_signature });
          if (result.success !== true) throw new Error('Payment signature could not be verified.');
          announce('Test payment confirmed. Your account plan is up to date.');
          window.dispatchEvent(new Event('argus:plan-change'));
        } catch (error) {
          announce(error.message || 'Could not verify the payment.', error.status === 401);
        } finally {
          release();
        }
      },
    });
    checkout.on('payment.failed', () => {
      if (receivedPayment) return;
      paymentFailed = true;
      announce('Test payment failed. You can retry in Razorpay Checkout.');
    });
    feedback.hidden = true;
    checkout.open();
  } catch (error) {
    announce(error.message || 'Could not open checkout.', error.status === 401);
    release();
  }
}

document.addEventListener('click', event => {
  const button = event.target.closest('button[data-razorpay-plan]');
  if (!button || active) return;
  const plan = monthlyPlans.find(item => item.testCheckout && item.id === button.dataset.razorpayPlan);
  if (plan) void openCheckout(button, plan);
});
