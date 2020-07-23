import React from 'react';
import { useRouteMatch } from 'react-router-dom'
import { connect } from 'react-redux';

import Carousel from './ProductCard/Carousel'


const Product = props => {
    const match = useRouteMatch()
    const product = props.products.products[match.params.index]
    
    return(
        <div className='product-container'>
            <Carousel key={match.params.index + product.product_id} img_urls={product.img_urls} edit={false} />
        </div>
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