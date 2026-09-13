import React, { useState } from 'react';
import { loadStripe, StripeCardNumberElementChangeEvent, StripeCardExpiryElementChangeEvent, StripeCardCvcElementChangeEvent } from '@stripe/stripe-js';
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { createPaymentIntent } from '@/services/paymentService';
import { postOrder } from '@/services/orderService';
import { IOrder } from '@/models/IOrder';
import { IAddress } from '@/models/IAddress';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ErrorText } from '@/components/styled/Text.styled';
import { colors, fonts } from '@/styles/variables';
import {
  CardFormWrapper,
  FieldRow,
  FieldGroup,
  FieldLabel,
  ElementBox,
  FieldError,
  SecureNotice,
} from '@/components/styled/StripePayment.styled';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY, {
  locale: 'en'
});

interface StripePaymentProps {
  totalPrice: number;
  cart: any[];
  totalAmount: number;
  addressFormValues: IAddress;
  onSuccess: (orderData: any) => void;
  onError: (error: string) => void;
}

const elementStyle = {
  base: {
    fontFamily: fonts.body,
    fontSize: '16px',
    color: colors.darkBlue,
    '::placeholder': {
      color: colors.lightGrey,
    },
  },
  invalid: {
    color: colors.coral,
  },
};

type FieldName = 'cardNumber' | 'cardExpiry' | 'cardCvc';

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
  const [focusedField, setFocusedField] = useState<FieldName | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<FieldName, string | null>>({
    cardNumber: null,
    cardExpiry: null,
    cardCvc: null,
  });
  const [fieldsComplete, setFieldsComplete] = useState<Record<FieldName, boolean>>({
    cardNumber: false,
    cardExpiry: false,
    cardCvc: false,
  });

  const handleFieldChange = (
    field: FieldName
  ) => (
    event:
      | StripeCardNumberElementChangeEvent
      | StripeCardExpiryElementChangeEvent
      | StripeCardCvcElementChangeEvent
  ) => {
    setFieldErrors((prev) => ({
      ...prev,
      [field]: event.error ? event.error.message : null,
    }));
    setFieldsComplete((prev) => ({ ...prev, [field]: event.complete }));
  };

  const allFieldsComplete = Object.values(fieldsComplete).every(Boolean);

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
            card: elements.getElement(CardNumberElement)!,
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
      <CardFormWrapper>
        <FieldGroup>
          <FieldLabel htmlFor="card-number">Card Number</FieldLabel>
          <ElementBox
            $focused={focusedField === 'cardNumber'}
            $invalid={!!fieldErrors.cardNumber}
          >
            <CardNumberElement
              id="card-number"
              options={{ style: elementStyle, showIcon: true }}
              onChange={handleFieldChange('cardNumber')}
              onFocus={() => setFocusedField('cardNumber')}
              onBlur={() => setFocusedField(null)}
            />
          </ElementBox>
          {fieldErrors.cardNumber && (
            <FieldError>{fieldErrors.cardNumber}</FieldError>
          )}
        </FieldGroup>

        <FieldRow>
          <FieldGroup>
            <FieldLabel htmlFor="card-expiry">Expiration Date</FieldLabel>
            <ElementBox
              $focused={focusedField === 'cardExpiry'}
              $invalid={!!fieldErrors.cardExpiry}
            >
              <CardExpiryElement
                id="card-expiry"
                options={{ style: elementStyle }}
                onChange={handleFieldChange('cardExpiry')}
                onFocus={() => setFocusedField('cardExpiry')}
                onBlur={() => setFocusedField(null)}
              />
            </ElementBox>
            {fieldErrors.cardExpiry && (
              <FieldError>{fieldErrors.cardExpiry}</FieldError>
            )}
          </FieldGroup>

          <FieldGroup>
            <FieldLabel htmlFor="card-cvc">CVC</FieldLabel>
            <ElementBox
              $focused={focusedField === 'cardCvc'}
              $invalid={!!fieldErrors.cardCvc}
            >
              <CardCvcElement
                id="card-cvc"
                options={{ style: elementStyle }}
                onChange={handleFieldChange('cardCvc')}
                onFocus={() => setFocusedField('cardCvc')}
                onBlur={() => setFocusedField(null)}
              />
            </ElementBox>
            {fieldErrors.cardCvc && (
              <FieldError>{fieldErrors.cardCvc}</FieldError>
            )}
          </FieldGroup>
        </FieldRow>

        <SecureNotice>
          <LockOutlinedIcon fontSize="inherit" />
          Payments are securely processed by Stripe
        </SecureNotice>

        {error && <ErrorText>{error}</ErrorText>}

        <Button
          type="submit"
          disabled={!stripe || loading || !allFieldsComplete}
          variant="contained"
          fullWidth
          style={{ marginTop: '20px', backgroundColor: colors.aquaBlue }}
        >
          {loading ? 'Processing...' : `Pay $${totalPrice.toFixed(2)}`}
        </Button>
      </CardFormWrapper>
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
