import axios from 'axios';

export interface PaymentIntentRequest {
  amount: number;
  currency?: string;
  orderId?: string;
}

export interface PaymentIntentResponse {
  clientSecret: string;
  paymentIntentId: string;
}

export interface ConfirmPaymentRequest {
  paymentIntentId: string;
}

export interface ConfirmPaymentResponse {
  status: string;
  amount: number;
  currency: string;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Create payment intent
export const createPaymentIntent = async (data: PaymentIntentRequest) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/payments/create-payment-intent`,
      data
    );
    return response.data;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
};

// Confirm payment
export const confirmPayment = async (data: ConfirmPaymentRequest) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/payments/confirm-payment`,
      data
    );
    return response.data;
  } catch (error) {
    console.error('Error confirming payment:', error);
    throw error;
  }
};
