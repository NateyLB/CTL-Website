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
            props.cart.cart.forEach(product => {
                setTotalQuantity(cur => cur += product.size.quantity)
                setTotalPrice(cur => cur += product.price * product.size.quantity)
            })
        // } 
        
    },[props.cart.cart])

    const closeCart = () => {
        const modal = document.getElementById("modal") as HTMLElement;
        modal.style.display = "none"

    }

    const createCartCards = () =>{
        return props.cart.cart.map(product => <CartCard key={product.name + product.size.size} product={product}/>)
    }
    console.log(props.cart)
    return(
        <div className='cart-overlay'>
            <div>
            <span className="close" onClick={closeCart}>&times;</span>
            <CartHeader/>
            {createCartCards()}
            <CartFooter totalQuantity={totalQuantity} totalPrice={totalPrice}/>
            </div>
            <Link to='/checkout' >
                <div className="checkout-button">Checkout</div>
            </Link>
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