import React from 'react';

const CartFooter = props => {
    const product = props.product;
    return (
        <div className='cart-card'>
            <div></div>
            <h1></h1>
            <h1></h1>
            <h1>{props.totalQuantity}</h1>
            <h1>${props.totalPrice}</h1>
        </div>
    )
}

export default CartFooter;