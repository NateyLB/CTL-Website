import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, updateProductQuantity } from '../../../actions/cartActions'

const CartCard = props => {
    let quantity = props.product.size.quantity;
    const product = props.product;
    const removeFromCart = () =>{
        if (localStorage.getItem("cart")){
            let cart = JSON.parse(localStorage.getItem("cart"))
            let newCart=[]
            for (const product of cart){
                if (product !== cart[props.index]){
                    newCart.push(product)
                }
            }
            props.removeFromCart(props.index)
            localStorage.removeItem("cart")
            localStorage.setItem('cart', JSON.stringify(newCart));
          } 
    }

    const changeHandler = event => {
        let cart = JSON.parse(localStorage.getItem("cart"))
            let newCart=[]
            for (const product of cart){
                if (product === cart[props.index]){
                    product.size.quantity = parseInt(event.target.value);
                }
                newCart.push(product)
            }
            quantity = parseInt(event.target.value)
            if (isNaN(quantity)){
                quantity = 0
            }
            localStorage.removeItem("cart")
            localStorage.setItem('cart', JSON.stringify(newCart));  
            props.updateProductQuantity(props.index, quantity)
    }
    

    const form = document.getElementById('quantity-form') as HTMLFormElement
    if(form){
        form.addEventListener('submit', function(event) {
            event.preventDefault();
        }, false);
    }
    return (
        <div className='cart-card'>
            <img src={product.img_urls[0].img_url} alt='Product Image'/>
            <h1>{product.name}</h1>
            <h1>{product.size.size}</h1>
            <form id="quantity-form"><input type='number' value={quantity} step='1' min='0' onChange={changeHandler}  /></form>
            <h1>${product.price * product.size.quantity}</h1>
            <span className='cancel' onClick={removeFromCart}>{window.screen.width >= 768 ? "REMOVE" : "X"}</span>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cartReducer
    };
};

export default connect(
    mapStateToProps,
    { removeFromCart, updateProductQuantity }
)(CartCard)