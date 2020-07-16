import React from 'react';
import Carousel from './Carousel'
/**
 * @desc productCard that displays product data for the shop
 * @param props product data from the shop page,
 */
const Product = props =>{
    return(
        <div className="shop-product-card">
            <div className="shop-product-info">
            <h1 className="shop-product-name">{props.product.name}</h1>
            <p className="shop-product-descriptipn">{props.product.description}</p>
            <p><h2>Color</h2>  {props.product.color}</p>
            <p><h2>Price</h2>  {props.product.price}</p>
            {/* <label htmlFor="sizes">
                <select name="sizes">
                    {props.product.sizes.map(size => {
                        return <option value={size.size}> {size.size} </option>
                    })}
                </select>
            </label> */}
            <div className="shop-product-sizes">
                    <h2>Sizes</h2>
                    <div className="shop-product-size-button-container">
                    {props.product.sizes.map(size => {
                        return <div className="shop-product-size-button">{size.size}</div> 
                    })}
                    </div>
            </div>
            </div>
            <Carousel key={`Carousel${props.product.product_id}`} img_urls={props.product.img_urls}/>
        </div>
    )
}

export default Product