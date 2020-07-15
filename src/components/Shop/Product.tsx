import React from 'react';

const Product = props =>{

    return(
        <div className="admin-product-card">
            <h3 className="admin-product-description">{props.product.name}</h3>
            <p className="admin-product-descriptipn">{props.product.description}</p>
            <div className="admin-product-info">
            <p>Color: {props.product.color}</p>
            <p>Total in stock: {props.product.quantity}</p>
            <p>Price: {props.product.price}</p>
            </div>
        </div>
    )
}

export default Product