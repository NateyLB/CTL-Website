import React from 'react';
import Carousel from './Carousel'
/**
 * @desc productCard that displays product data for the shop
 * @param props product data from the shop page,
 */
const Product = props =>{

    const createSizeButtons = () =>{
        const sizes = props.product.sizes.filter(size => size.quantity > 0)
        return  sizes.map(size => {
            return <div className="shop-product-size-button" key={size.size + size.color + size.quantity}>{size.size}</div> 
        })
    }
    const createColorButtons = () =>{
        const colors:Array<string> = []
        props.product.sizes.forEach(size =>{
            if( colors.includes(size.color) != true ){
                colors.push(size.color)
            }
        })
        return colors.map(color =>{
            const colorStyle = {
                color: color
            }
            return <div className="shop-product-size-button shop-product-color-button " key={color} style={colorStyle} >{color}</div>
        })
    }
    createColorButtons()
    

    return(
        <div className="shop-product-card">
            <div className="shop-product-info">
            <h1 className="shop-product-name">{props.product.name}</h1>
            <div className="shop-product-description">{props.product.description}</div>
            <div><h2>Price</h2>  ${props.product.price}</div>
            <div className="shop-product-sizes">
                <h2>Colors</h2> 
                <div className="shop-product-size-button-container">
                {createColorButtons()}
                </div>
                </div>
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
                    {createSizeButtons()}
                    </div>
            </div>
            </div>
            <Carousel key={`Carousel${props.product.product_id}`} img_urls={props.product.img_urls}/>
        </div>
    )
}

export default Product