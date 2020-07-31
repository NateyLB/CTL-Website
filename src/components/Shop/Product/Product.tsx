import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom'
import { connect } from 'react-redux';
import { addToCart } from '../../../actions/cartActions'
import { Link } from 'react-router-dom'

import Carousel from './Carousel'

interface Size{
    size: string,
    color: string,
    quantity: number
}

interface Product{
    product_id:number,
    name: string,
    type: number,
    description: string,
    size: Size,
    price: number,
    quantity: number
}

/**
 * @desc the full screen product, displays when productCard from shop is clicked
 * @props product data from product card
 */
const Product = props => {
    //keps track of whoch color is selected
    const [color, setColor] = useState('')
    //keeps track of which button to apply styles to
    const [colorButtonStyles, setColorButtonStyles]: any[] = useState([])
    const [sizeButtonStyles, setSizeButtonStyles]: any[] = useState([])
    //keeps track of which size is inteaded to be purchased
    const [sizeToBuy, setSizeToBuy] = useState(null)
    const [maxQuantity, setMaxQuantity] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const match = useRouteMatch()

    let colorButtonStylesCopy: any[] = []
    let sizeButtonStylesCopy: any[] = []

    const product = props.products.products[match.params.index]

    //handles setting background on the active slection of color and size
    const toggleStyle = (buttonTypeCopy, setState, index) => {
        setSizeToBuy(null)
        for (let i = 0; i < sizeButtonStylesCopy.length; i++) {
            sizeButtonStylesCopy[i] = {}
        }
        setSizeButtonStyles(sizeButtonStylesCopy)
        for (let i = 0; i < buttonTypeCopy.length; i++) {
            buttonTypeCopy[i] = {}
        }
        buttonTypeCopy[index] = {
            backgroundColor: 'rgb(138, 0, 180)',
            color: 'white',
            border: '1px solid black'
        }
        setState(buttonTypeCopy)

    }

    //handles setting a wunatity to buy on inout change
    const changeHandler = event => {
        setQuantity(parseInt(event.target.value))
    }

    if (isNaN(quantity)){
        setQuantity(0)
    }

    //creates buttons to select sizes, keeps track of which color is selected and which sizes are in stock
    const createSizeButtons = () => {
        const sizes = product.sizes.filter(size => size.quantity > 0)
        const colorSizes = sizes.filter(size => size.color === color)
        if (sizeButtonStylesCopy.length > 0) {
            sizeButtonStylesCopy = []
        }
        return colorSizes.map((size, index) => {
            sizeButtonStylesCopy.push({})
            return (<div style={sizeButtonStyles[index]} className="product-size-button" key={size.size + size.color + size.quantity}
                onClick={() => { toggleStyle(sizeButtonStylesCopy, setSizeButtonStyles, index); setSizeToBuy(size); setMaxQuantity(size.quantity) }}>
                {size.size}</div>)
        })
    }

    //creates buttons for colors, handles multiples color of some type
    const createColorButtons = () => {
        const colors: Array<string> = []
        if (colorButtonStylesCopy.length > 0) {
            colorButtonStylesCopy = []
        }
        product.sizes.forEach(size => {
                if (colors.includes(size.color) !== true && size.quantity > 0) {
                    colors.push(size.color)
                }
        })
        return colors.map((color, index) => {
            colorButtonStylesCopy.push({})
            return <div style={colorButtonStyles[index]} className="product-size-button" key={color} onClick={() => { setColor(color); toggleStyle(colorButtonStylesCopy, setColorButtonStyles, index) }} >{color}</div>
        })
    }

    //adds the product that is selcted to a cart in local storage
    const addToCart = () => {
        const formQuantity = (document.getElementById('product-quantity') as HTMLInputElement).value
        const productToBuy = {
            product_id: product.product_id,
            description: product.description,
            img_urls: product.img_urls,
            name: product.name,
            price: product.price,
            item_type: product.item_type,
            size: {...sizeToBuy, quantity: parseInt(formQuantity) }
        }
        props.addToCart(productToBuy)
        if (localStorage.getItem("cart")){
            let newCart = []
            let updated = false;
            let cart  = JSON.parse(localStorage.getItem("cart"))
            // let product :any;
            console.log(cart)
            for(let i = 0; i < cart.length; i++){
                if( cart[i].product_id === productToBuy.product_id && cart[i].size.id === productToBuy.size.id ){
                    cart[i].size.quantity += productToBuy.size.quantity
                    updated = true
                  } 
                  console.log(cart[i])
                  newCart.push(cart[i])
            }
            if(updated === false){
                newCart.push(productToBuy)
            }
            cart = [...cart, productToBuy]
            localStorage.setItem('cart', JSON.stringify(newCart));
        } else {
            localStorage.setItem('cart', JSON.stringify([productToBuy]));
        }
        //reinitialize states used
        setColor('')
        setSizeToBuy(null)
        for (let i = 0; i < colorButtonStylesCopy.length; i++) {
            colorButtonStylesCopy[i] = {}
        }
        setColorButtonStyles(sizeButtonStylesCopy)
        setQuantity(0)
        
    }
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
                    {color !== '' ? <h2>Size</h2> : null}
                    <div className="product-button-container">
                        {createSizeButtons()}
                    </div>
                    {sizeToBuy === null ? null : <form className='product-quantity-container'>
                        <label htmlFor='quantity'><h2>Quantity</h2></label>
                        <input className='product-quantity' id='product-quantity' type="number" step="1" min='0' max={maxQuantity} value={quantity} onChange={changeHandler} />
                    </form>}

                    {quantity === 0 ? null :
                    <Link to="/shop"> 
                    <div className="product-add-to-cart" onClick={addToCart}>Add to Cart</div>
                    </Link>
                    }
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
    mapStateToProps,
    { addToCart }
)(Product)