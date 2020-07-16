import React from 'react';
import Carousel from './Carousel'


/**
 * @desc a product card that allows editing of the product in DB
 * @param props product from the Product container
 */
const Product = props =>{

    return(
        <div className="admin-product-card">
            <div className="admin-product-info">
            <h3 className="admin-product-name">{props.product.name}</h3>
            <div className="admin-product-descriptip]on">{props.product.description}</div>
            <div><h2>Color:</h2> {props.product.color}</div>
            <div><h2>Price:</h2> {props.product.price}</div>
            <div><h2>Total in stock:</h2> {props.product.quantity}</div>
            <div className="admin-product-sizes">
                <h2>Sizes</h2>
                <div className="admin-product-size-button-container">
                {props.product.sizes.map(size => {
                        return <div className="admin-product-size-button" key={size.size}>{size.size}: {size.quantity}</div> 
                    })}
                </div>
            </div>
            </div>
            <Carousel key={`Carousel${props.product.product_id}`} img_urls={props.product.img_urls}/>
        </div>
    )
}

export default Product