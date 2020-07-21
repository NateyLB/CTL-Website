import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import Product from './ProductCard/Product'

import { getProducts } from '../../actions/productActions'


/**
 * @desc the shop section of the store
 * @param props actions from the action store that gets all products, state from
 * reducer that contains all products
 */
const Shop = props =>{
    /**
     * @desc change title of page and get all products if none exist in state
     */
    useEffect(()=>{
        document.title="Shop"
        if (props.products.products.length <= 0){
           
            setTimeout( props.getProducts(), 10000)
        }
        
    },[])
    /**
     * @desc create product cards
     */
    const createProductCards = () =>{
        return (props.products.products.map(product => <Product key={product.product_id} product={product}/>))
    }
    return (
        <section id='shop'>
            <h1 className="title">Shop</h1>
            <div className='shop-products-container'>
            {props.products.loading  ? <div className="loading-container"><img className='logo loading' src={require('../../resources/favicon_io_transparent/android-chrome-512x512.png')} alt="CausingTheLost.logo"></img><p>Loading...</p></div> : createProductCards()}

            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        products: state.productsReducer 
    };
  };
  
  export default connect(
  mapStateToProps,
  {getProducts}
  )(Shop)