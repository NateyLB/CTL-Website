import React, { useEffect } from 'react';
import AddProduct from './AddProduct';
import Product from './ProductCard/Product';

import { connect } from 'react-redux'; 
import { getProducts } from '../../actions/productActions'

const Products = props =>{
    useEffect(()=>{
        if (props.products.products.length <= 0){
            props.getProducts()
        }
    },[])
    console.log(props.products)
    const createProductCards = () =>{
        return (props.products.products.map(product => <Product key={product.product_id} product={product}/>))
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