import React from 'react';
import { Route } from 'react-router'

import ShippingAddressForm from './ShippingAddressForm'
import Billing from './Billing/Billing'


const Checkout = () => {

    return (
        <section id="checkout">
            <h1 className="title">Checkout</h1>
            <Route exact path='/checkout'>
            <ShippingAddressForm/>
            </Route>
            <Route path='/checkout/billing'>
            <Billing/>
            </Route>
        </section>
    )
}

export default Checkout;
