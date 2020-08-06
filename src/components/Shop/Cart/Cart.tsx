import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartHeader from './CartHeader'
import CartCard from './CartCard';
import CartFooter from './CartFooter';

interface Size{
    size: string,
    color: string,
    quantity: number
}
interface Sizes extends Array<Size>{}

interface Product{
    name: string,
    type: number,
    description: string,
    sizes: Sizes,
    price: number,
    quantity: number
}

const Cart = props => {

    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
            setTotalQuantity(0)
            setTotalPrice(0)
            props.cart.cart.forEach(product => {
                setTotalQuantity(cur => cur += product.size.quantity)
                setTotalPrice(cur => cur += product.price * product.size.quantity)
            })
        
    },[props.cart.cart])
    //close cart
    const closeCart = () => {
        const modal = document.getElementById("modal") as HTMLElement;
        modal.style.display = "none"

    }
    //card for cart
    const createCartCards = () =>{
        return props.cart.cart.map((product,index) => <CartCard key={product.name + product.size.size} product={product} index={index}/>)
    }

    //close cart no prss pf ESC or BACKSPACE
    document.addEventListener('keydown', event => {
        if(event.key == 'Escape'){
        closeCart()
        }
    })
    return(
        <div className={props.checkout ? 'cart-overlay' : 'billing-confirm'}>
            <div>
            <img className='CTL-logo' src={require('../../../resources/favicon_io_transparent/android-chrome-512x512.png')} alt='Lost Cause'/>
            {props.checkout? <span className="close" onClick={closeCart}>&times;</span> : null}
            <CartHeader/>
            {createCartCards()}
            <CartFooter totalQuantity={totalQuantity} totalPrice={totalPrice}/>
            </div>
            {props.checkout && totalPrice > 0 ? (props.cart.cart.length > 0 ? <Link to='/checkout'  >
                <div className="checkout-button" onClick={closeCart}>Checkout</div>
            </Link> : null) : null}
            {}
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cartReducer
    };
};

export default connect(
    mapStateToProps
)(Cart)