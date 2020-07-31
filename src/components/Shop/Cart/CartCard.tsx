import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../../actions/cartActions'

const CartCard = props => {
    const product = props.product;
    const removeFromCart = (index) =>{
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
    return (
        <div className='cart-card'>
            <img src={product.img_urls[0].img_url} alt='Product Image'/>
            <h1>{product.name}</h1>
            <h1>{product.size.size}</h1>
            <h1>{product.size.quantity}</h1>
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
    { removeFromCart }
)(CartCard)