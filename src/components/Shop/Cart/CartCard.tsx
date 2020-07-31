import React from 'react';

const CartCard = props => {
    const product = props.product;
    console.log(window.screen.width)
    return (
        <div className='cart-card'>
            <img src={product.img_urls[0].img_url} alt='Product Image'/>
            <h1>{product.name}</h1>
            <h1>{product.size.size}</h1>
            <h1>{product.size.quantity}</h1>
            <h1>${product.price * product.size.quantity}</h1>
            <span className='cancel'>{window.screen.width >= 768 ? "REMOVE" : "X"}</span>
        </div>
    )
}

export default CartCard;