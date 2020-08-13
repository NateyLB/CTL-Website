import React, { useState, useEffect } from "react";
import { Route } from "react-router";

import ShippingAddressForm from "./ShippingAddressForm";
import Billing from "./Billing/Billing"
import Confirm from "./Confirm";


const Checkout = (props) => {

  return (
    <section id="checkout">
      <h1 className="title">Checkout</h1>
      <Route exact path="/checkout">
        <ShippingAddressForm />
      </Route>
      <Route path="/checkout/billing">
        <Billing/>
      </Route>
      <Route path="/checkout/confirmation">
        <Confirm />
      </Route>
    </section>
  );
};
export default Checkout
