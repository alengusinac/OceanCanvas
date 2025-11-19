import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { createPaymentIntent } from '@/services/paymentService';
import { postOrder } from '@/services/orderService';
import { IOrder } from '@/models/IOrder';
import { IAddress } from '@/models/IAddress';
import Button from '@mui/material/Button';
import { ErrorText } from '@/components/styled/Text.styled';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

interface StripePaymentProps {
  totalPrice: number;
  cart: any[];
  totalAmount: number;
  addressFormValues: IAddress;
  onSuccess: (orderData: any) => void;
  onError: (error: string) => void;
}

const cardElementOptions = {
  style: {
    base: {
      fontSize: '16px',
      color: '#424770',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
};

const CheckoutForm: React.FC<{
  totalPrice: number;
  cart: any[];
  totalAmount: number;
  addressFormValues: IAddress;
  onSuccess: (orderData: any) => void;
  onError: (error: string) => void;
}> = ({
  totalPrice,
  cart,
  totalAmount,
  addressFormValues,
  onSuccess,
  onError,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Create payment intent
      const paymentIntentResponse = await createPaymentIntent({
        amount: totalPrice,
        currency: 'usd',
      });

      if (!paymentIntentResponse.success) {
        throw new Error(
          paymentIntentResponse.message || 'Failed to create payment intent'
        );
      }

      const { clientSecret } = paymentIntentResponse.data;

      // Confirm payment with Stripe
      const { error: stripeError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement)!,
          },
        });

      if (stripeError) {
        setError(stripeError.message || 'Payment failed');
        onError(stripeError.message || 'Payment failed');
      } else if (paymentIntent?.status === 'succeeded') {
        // Create order in your system
        const orderData: IOrder = {
          address: addressFormValues,
          payment: {
            cardNumber: '**** **** **** ****',
            expirationDate: '**/**',
            ccv: '***',
            paymentIntentId: paymentIntent.id,
            status: 'succeeded',
          },
          products: cart.map((item) => ({
            product: item.product._id,
            size: item.product.size,
            amount: item.amount,
          })),
          total: {
            amount: totalAmount,
            price: totalPrice,
          },
        };

        const orderResponse = await postOrder(orderData);

        if (orderResponse?.status === 201) {
          onSuccess(orderResponse.data);
        } else {
          throw new Error('Failed to create order');
        }
      }
    } catch (err: any) {
      const errorMessage = err.message || 'An error occurred during payment';
      setError(errorMessage);
      onError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '20px' }}>
        <CardElement options={cardElementOptions} />
      </div>

      {error && <ErrorText>{error}</ErrorText>}

      <Button
        type="submit"
        disabled={!stripe || loading}
        variant="contained"
        fullWidth
        style={{ marginTop: '20px' }}
      >
        {loading ? 'Processing...' : `Pay $${totalPrice.toFixed(2)}`}
      </Button>
    </form>
  );
};

const StripePayment: React.FC<StripePaymentProps> = ({
  totalPrice,
  cart,
  totalAmount,
  addressFormValues,
  onSuccess,
  onError,
}) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        totalPrice={totalPrice}
        cart={cart}
        totalAmount={totalAmount}
        addressFormValues={addressFormValues}
        onSuccess={onSuccess}
        onError={onError}
      />
    </Elements>
  );
};

export default StripePayment;
