import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { clearCart } from '../../actions/cartActions'

const Confirm = props => {

    useEffect(() => {
        //do some inverntory stuff, get order ID
        localStorage.setItem('cart', JSON.stringify([]));
        props.clearCart()

    },[])

    return (
        <div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.productsReducer,
        cart: state.cartReducer
    };
};

export default connect(
    mapStateToProps,
    { clearCart }
)(Confirm)