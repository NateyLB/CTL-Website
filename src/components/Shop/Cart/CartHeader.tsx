import React from "react";

const CartHeader = (props) => {
  const product = props.product;
  return (
    <div className="cart-card">
      <div></div>
      <h1>Product</h1>
      <h1>Size</h1>
      <h1>Quantity</h1>
      <h1>Total</h1>
    </div>
  );
};

export default CartHeader;
