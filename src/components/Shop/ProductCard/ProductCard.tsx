import React from 'react';
import Carousel from './Carousel'
import { v4 as uuidv4 } from 'uuid';
/**
 * @desc productCard that displays product data for the shop
 * @param props product data from the shop page,
 */
const ProductCard = props =>{

    const createSizeButtons = () =>{
        let sizes = props.product.sizes.filter(size => size.quantity > 0)
        sizes = sizes.map(size => size.size )
        sizes = Array.from(new Set(sizes))
        return sizes.map(size =><div className="shop-productcard-size-button" key={size + uuidv4}>{size} </div>)
        
    }

    const createColorButtons = () =>{
        const colors:Array<string> = []
        props.product.sizes.forEach(size =>{
            if( colors.includes(size.color) !== true ){
                colors.push(size.color)
            }
        })
        return colors.map(color =>{
            // const colorStyle = {
            //     color: color
            // }
            return <div className="shop-productcard-size-button " key={color + uuidv4} >{color}</div>
        })
    }
    

    return(
        <div className="shop-product-card">
            <div className="shop-product-info">
            <h1 className="shop-product-name">{props.product.name}</h1>
            <p className="shop-product-description">{props.product.description}</p>
            <div><h2>Price</h2>  ${props.product.price}</div>
            <div className="shop-product-sizes">
                <h2>Colors</h2> 
                <div className="shop-productcard-size-button-container">
                {createColorButtons()}
                </div>
                </div>
            <div className="shop-product-sizes">
                    <h2>Sizes</h2>
                    <div className="shop-productcard-size-button-container">
                    {createSizeButtons()}
                    </div>
            </div>
            </div>
            <Carousel key={`Carousel${props.product.product_id}`} img_urls={props.product.img_urls} edit={false}/>
        </div>
    )
}

export default ProductCard