import React from 'react';

const Cart = props => {

    const closeCart = () => {
        const modal = document.getElementById("modal") as HTMLElement;
        modal.style.display = "none"

    }

    return(
        <div className='cart-overlay'>
            <span className="close" onClick={closeCart}>&times;</span>
        </div>
    )
}

export default Cart;