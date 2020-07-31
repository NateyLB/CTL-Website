import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, updateProductQuantity } from '../../../actions/cartActions'

const CartCard = props => {
    const [quantity, setQuantity] = useState(props.product.size.quantity)
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
            setQuantity(parseInt(event.target.value))
            localStorage.removeItem("cart")
            localStorage.setItem('cart', JSON.stringify(newCart));  
    }
    // document.addEventListener('keydown', event => {
    //     if(event.key == 'ArrowUp' || event.key == 'ArrowDown'){
    //         props.updateProductQuantity(props.index, quantity)
    //     }
    // })
    return (
        <div className='cart-card'>
            <img src={product.img_urls[0].img_url} alt='Product Image'/>
            <h1>{product.name}</h1>
            <h1>{product.size.size}</h1>
            <form><input type='number' value={quantity} step='1' min='0' onChange={changeHandler} onClick={() => props.updateProductQuantity(props.index, quantity)} /></form>
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