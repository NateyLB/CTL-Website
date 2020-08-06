import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ShippingAddressForm from './ShippingAddressForm'
import Stripe from './Billing/Billing'
import PaypalButton from './Billing/PaypalButton'
import Cart from '../Shop/Cart/Cart'

const promise = loadStripe('pk_test_51GskCkDff7659YjxexBIJDvJWbJkniud4UAEahaunSvGhShEV3lDmtY5VXjZNa45T4UZ9T8Cdj8yhpNc5ri71Qtu003qZcgH99');


const Checkout = props => {

    const [totalPrice, setTotalPrice] = useState(0);
    //check price, render payment options only if total is > 0
    useEffect(() => {
            setTotalPrice(0)
            props.cart.cart.forEach(product => {
                setTotalPrice(cur => cur += product.price * product.size.quantity)
            })
        
    },[props.cart.cart])

    return (
        <section id="checkout">
            <h1 className="title">Checkout</h1>
            <Route exact path='/checkout'>
            <ShippingAddressForm/>
            </Route>
            <Route path='/checkout/billing'>
            <div className='billing-container'>
            <Cart checkout={false} />
            {totalPrice > 0 ? 
            <div className='payment-buttons-container'>
            <PaypalButton />
            <Elements stripe={ promise }>
            <Stripe/>
            </Elements>
            </div> : null }
            </div>
            </Route>
        </section>
    )
}
const mapStateToProps = state => {
    return {
        cart: state.cartReducer
    };
};

export default connect(
    mapStateToProps
)(Checkout)
