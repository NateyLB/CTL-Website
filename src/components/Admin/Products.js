import React from 'react';
import AddProduct from './AddProduct.js';

const Products = props =>{

    return (
        <div id="admin-products">
            <h1>
                Product Management
            </h1>
            <AddProduct/>
        </div>
    )
}

export default Products;