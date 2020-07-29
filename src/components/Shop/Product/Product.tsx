import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom'
import { connect } from 'react-redux';

import Carousel from './Carousel'

const Product = props => {
    const [color, setColor] = useState('')
    const [colorButtonStyles, setColorButtonStyles] :any[] = useState([])
    const [sizeButtonStyles, setSizeButtonStyles] :any[] = useState([])
    const [sizeToBuy, setSizeToBuy] = useState({})
    const match = useRouteMatch()
    const product = props.products.products[match.params.index]

    const toggleColor = (colorParam) =>{
        // if(color == colorParam){
        //     setColor('')
        // }
        // else{
            setColor(colorParam)
        // }
    }

    const toggleStyle = (state, setState, index) =>{
        if (state[index] == {}){
            const stateCopy = JSON.parse(JSON.stringify(state));
            stateCopy[index] = {
            backgroundColor: "rgb(138, 0, 180)",
            color: "white",
            border: "1px solid black"
            }
        setState(stateCopy)
        }
        
    }

    const createSizeButtons = () =>{
        const sizes = product.sizes.filter(size => size.quantity > 0)
        const colorSizes = sizes.filter(size => size.color == color)
        // if (sizeButtonStyles.length > 0) {
        //     setSizeButtonStyles([])
        // }
        return  colorSizes.map((size,index) => {
            // sizeButtonStyles.push({})
            return <div style={sizeButtonStyles[index]} className="product-size-button" key={size.size + size.color + size.quantity} onClick={() => setSizeToBuy(size)}>{size.size}</div> 
        })
    }
    
    const createColorButtons = () =>{
        const colors:Array<string> = []
        // if( colorButtonStyles.length > 0){
        //     setColorButtonStyles([])
        // }
        product.sizes.forEach(size =>{
            if( colors.includes(size.color) != true ){
                colors.push(size.color)
            }
        })
        return colors.map((color,index) =>{
            // colorButtonStyles.push({})
            return <div style={colorButtonStyles[index]} className="product-size-button" key={color} onClick={() => {toggleColor(color); }} >{color}</div>
        })
    } 
    console.log(colorButtonStyles,'color')
    console.log(sizeButtonStyles, 'size')
    console.log(sizeToBuy)
    return (
        props.products.products.length ? 
        <div className='product-container'>
            <Carousel key={match.params.index + product.product_id} img_urls={product.img_urls} edit={false} />
            <div className="product-info">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <div className="product-price"><h2>Price</h2>  ${product.price}</div>
            <h2>Color</h2>
            <div className="product-button-container">
                {createColorButtons()}
            </div>
            {color != ''? <h2>Size</h2>: null}
            <div className="product-button-container">
                {createSizeButtons()}
            </div>
            
            </div>
        </div> 
        : null
        
        
    )
}

const mapStateToProps = state => {
    return {
        products: state.productsReducer,
        cart: state.cartReducer
    };
};

export default connect(
    mapStateToProps
)(Product)