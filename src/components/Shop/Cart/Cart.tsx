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

    // const [cart, setCart] :any[] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // if (localStorage.getItem("cart")){
            // let localCart = JSON.parse(localStorage.getItem("cart"))
            // setCart(localCart)
            setTotalQuantity(0)
            setTotalPrice(0)
            props.cart.cart.forEach(product => {
                setTotalQuantity(cur => cur += product.size.quantity)
                setTotalPrice(cur => cur += product.price * product.size.quantity)
            })
        // } 
        
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
    document.addEventListener('keydown', (e) => {
        if(e.key == 'Escape' || e.key == 'Backspace'){
        closeCart()
        }
    })
    return(
        <div className='cart-overlay'>
            <div>
            <img className='CTL-logo' src={require('../../../resources/favicon_io_transparent/android-chrome-512x512.png')} alt='Lost Cause'/>
            <span className="close" onClick={closeCart}>&times;</span>
            <CartHeader/>
            {createCartCards()}
            <CartFooter totalQuantity={totalQuantity} totalPrice={totalPrice}/>
            </div>
            {props.cart.cart.length > 0 ? <Link to='/checkout'  >
                <div className="checkout-button" onClick={closeCart}>Checkout</div>
            </Link> : null}
            
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