import React, { useState} from "react";
import { Link } from "react-router-dom"
import { useHistory } from 'react-router'
import { connect } from 'react-redux'; 
 import { toggleCart } from '../actions/cartActions'

/**
 * @desc main nav bar for the site
 * @param props not used
 */
const Nav = props =>{
    const [cart, setCart] = useState(false);
    const match = useHistory();
  
    const openCart = () => {
        const modal = document.getElementById("modal") as HTMLElement;
        modal.style.display = "block"
        // console.log(modal)
    }
    /**
     * @desc go to /home
     * @return boolean
     */
    const pushHome =()=>{
        match.push('/home')
        return true
    }

    return(
        <>
        <nav className="nav">
            <a href="#about" onClick={pushHome}>
                Home
            </a>
            <a href="#gallery" onClick={pushHome}>
                Gallery
            </a>
            <a href="#contact" onClick={pushHome}>
                Contact
            </a>
            <Link to="/shop">
                Shop
            </Link>
            <i className="fas fa-shopping-cart" onClick={openCart}></i>
            <a href="#about" onClick={pushHome} >
            <img className='logo' src={require('../resources/favicon_io_transparent/favicon.ico')} alt="CausingTheLost.logo" ></img>
            </a>
        </nav>
        </>
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
    { toggleCart }
)(Nav)