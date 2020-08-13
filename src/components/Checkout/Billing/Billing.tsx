import React, { useState, useEffect} from 'react'
import { connect } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Stripe from "./Stripe";
import PaypalButton from "./PaypalButton";
import Cart from "../../Shop/Cart/Cart";

const promise = loadStripe(
    "pk_test_51GskCkDff7659YjxexBIJDvJWbJkniud4UAEahaunSvGhShEV3lDmtY5VXjZNa45T4UZ9T8Cdj8yhpNc5ri71Qtu003qZcgH99"
  );

const Billing = props => {

    const [totalPrice, setTotalPrice] = useState(0);
  //check price, render payment options only if total is > 0
  useEffect(() => {
    setTotalPrice(0);
    props.cart.cart.forEach((product) => {
      setTotalPrice((cur) => (cur += product.price * product.size.quantity));
    });
  }, [props.cart.cart]);

    return (
        <div className="billing-container">
          <Cart checkout={false} />
          {totalPrice > 0 ? (
            <div className="payment-buttons-container">
              <PaypalButton />
              <Elements stripe={promise}>
                <Stripe />
              </Elements>
            </div>
          ) : null}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      cart: state.cartReducer,
    };
  };
  
export default connect(mapStateToProps)(Billing);
