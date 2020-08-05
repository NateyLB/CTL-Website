import React from 'react';
import { Route } from 'react-router'

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ShippingAddressForm from './ShippingAddressForm'
import Billing from './Billing/Billing'

const promise = loadStripe('pk_test_51GskCkDff7659YjxexBIJDvJWbJkniud4UAEahaunSvGhShEV3lDmtY5VXjZNa45T4UZ9T8Cdj8yhpNc5ri71Qtu003qZcgH99');


const Checkout = () => {

    return (
        <section id="checkout">
            <h1 className="title">Checkout</h1>
            <Route exact path='/checkout'>
            <ShippingAddressForm/>
            </Route>
            <Route path='/checkout/billing'>
            <Elements stripe={ promise }>
            <Billing/>
            </Elements>
            </Route>
        </section>
    )
}

export default Checkout;
