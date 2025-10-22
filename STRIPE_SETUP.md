# Stripe Payment Integration Setup

This guide will help you set up Stripe payment integration for developer testing.

## Prerequisites

1. Create a Stripe account at https://stripe.com
2. Get your test API keys from the Stripe Dashboard

## Environment Variables

### Backend (.env)

Add the following environment variables to your backend `.env` file:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

### Frontend (.env)

Add the following environment variable to your frontend `.env` file:

```env
# Stripe Configuration
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
```

## Getting Your Stripe Keys

1. Log in to your Stripe Dashboard
2. Make sure you're in "Test mode" (toggle in the top left)
3. Go to "Developers" > "API keys"
4. Copy the following keys:
   - **Publishable key** (starts with `pk_test_`) - for frontend
   - **Secret key** (starts with `sk_test_`) - for backend

## Test Card Numbers

For testing payments, use these test card numbers:

- **Successful payment**: `4242424242424242`
- **Declined payment**: `4000000000000002`
- **Requires authentication**: `4000002500003155`

Use any future expiry date (e.g., 12/25) and any 3-digit CVC.

## Features Implemented

### Backend

- ✅ Payment intent creation endpoint (`/payments/create-payment-intent`)
- ✅ Payment confirmation endpoint (`/payments/confirm-payment`)
- ✅ Webhook endpoint for Stripe events (`/payments/webhook`)
- ✅ Updated order schema to include Stripe payment data

### Frontend

- ✅ Stripe Elements integration
- ✅ Payment method selection (Stripe vs Manual)
- ✅ Stripe payment component with card input
- ✅ Payment success/error handling
- ✅ Integration with existing checkout flow

## Testing the Integration

1. Start both backend and frontend servers
2. Navigate to the checkout page
3. Fill in shipping information
4. Select "Stripe Payment (Recommended)"
5. Use test card number `4242424242424242`
6. Complete the payment

## Security Notes

- Never commit real API keys to version control
- Use test keys for development
- Switch to live keys only when ready for production
- The webhook endpoint is set up but may need additional configuration for production

## Next Steps

1. Set up your Stripe account and get test keys
2. Add the environment variables to your `.env` files
3. Test the payment flow with test card numbers
4. Customize the payment UI as needed
5. Set up webhooks for production (optional)

## Troubleshooting

- Make sure all environment variables are set correctly
- Check that the backend server is running on the correct port
- Verify that the frontend can reach the backend API
- Check browser console and backend logs for any errors
