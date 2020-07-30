import React, { useEffect } from 'react';
import AddProduct from './AddProduct';
import Product from './Product';

import { connect } from 'react-redux'; 
import { getProducts } from '../../actions/productActions'

/**
 * @desc conatiner for product cards
 * @param props passed in product data from reducer and actions
 */
const Products = props =>{
    useEffect(()=>{
        if (props.products.products.length <= 0){
            props.getProducts()
        }
    },[])
    const createProductCards = () =>{
        return (props.products.products.map((product, index) => <Product key={product.product_id} product={product} index={index}/>))
    }
    return (
        <div id="admin-products">
            <h1>
                Product Management
            </h1>
            <AddProduct/>
            <div className="admin-products-container">
            {createProductCards()}
            </div>
        </div>
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
  )(Products)