import React, { useEffect } from 'react';
import Product from './Product'

const Shop = props =>{
    useEffect(()=>{
        document.title="Shop"
        
    },[])
    return (
        <section id='shop'>
            <h1>Shop</h1>
        </section>
    )
}

export default Shop;