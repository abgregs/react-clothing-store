import { FormEvent, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js'
import { useSelector } from 'react-redux';

import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import Button from '../button/button.component';

import './payment-form.scss';

const ifValidCardElement = (card: StripeCardElement | null): card is StripeCardElement =>  card !== null;

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const cardDetails = elements.getElement(CardElement);

    if (!ifValidCardElement(cardDetails)) return;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      let errorMessage: String = 'There was an error submitting payment.';
      if (paymentResult.error.message) {
        errorMessage += ' ' + paymentResult.error.message;
      }
      alert(errorMessage);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment successful.');
      }
    }
  };

  return (
    <div className='payment-form-container'>
      <form className='form-container' onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <div className='test-note'>Use test card number <code>4242 4242 4242 4242</code>, any future date, and any CVC and zip to proceed.</div>
        <CardElement />
        <Button isLoading={isProcessingPayment} buttonType='inverted'>
          Pay Now
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
