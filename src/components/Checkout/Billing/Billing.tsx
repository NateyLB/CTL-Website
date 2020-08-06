import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router'
import { connect } from 'react-redux'; 
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

import { axiosBase } from '../../../utils/axiosBase'

const Stripe = props => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const match = useHistory();
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
      axiosBase()
      .post('/payment/create-payment-intent', props.cart.cart )
      .then(res => {
        return res;
      })
      .then(data => {
        setClientSecret(data.data.clientSecret);
      });
  }, []);
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: `'Tenali Ramakrishna', sans-serif`,
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "red",
        iconColor: "red"
      }
    }
  };
  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: ev.target.name.value
        }
      }
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      match.push('/checkout/confirmation')
    }
  };
  return (
    <div className='stripe-container'>
    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
      <button
        disabled={processing || disabled || succeeded}
        id="submit"
      >
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay"
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded
      </p>
    </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.cartReducer
  };
};

export default connect(
mapStateToProps
)(Stripe)