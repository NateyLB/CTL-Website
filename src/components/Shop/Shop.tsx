import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard/ProductCard';
import Product from './Product'

import { getProducts } from '../../actions/productActions';


/**
 * @desc the shop section of the store
 * @param props actions from the action store that gets all products, state from
 * reducer that contains all products
 */
const Shop = props => {
    /**
     * @desc change title of page and get all products if none exist in state
     */
    useEffect(() => {
        document.title = "Shop"
        if (props.products.products.length <= 0) {

            setTimeout(props.getProducts(), 10000)
        }

    }, [])
    /**
     * @desc create product cards
     */
    const createProductCards = () => {
        return (props.products.products.map((product, index) => {
        return (
        <Link key={index + product.product_id} className="product-link" to={`/shop/product/${index}`}>
        <ProductCard  product={product} />
        </Link>
        )}))
    }
    return (
        <section id='shop'>
            <h1 className="title">Shop</h1>
            <Route exact path="/shop">
            <div className='shop-products-container'>
                {
                    props.products.loading ? <div className="loading-container">
                        <img className='logo loading' src={require('../../resources/favicon_io_transparent/android-chrome-512x512.png')} alt="CausingTheLost.logo"></img><p>Loading...</p>
                    </div> : createProductCards()
                }
            </div>
            </Route>
            <Route path='/shop/product/:index'>
                <Product/>
            </Route>
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
    { getProducts }
)(Shop)