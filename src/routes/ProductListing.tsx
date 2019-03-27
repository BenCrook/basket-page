import React from 'react';
import { products } from '../data';
import ProductListing from '../components/product-listing/ProductListing';

// todo: Put listing into own component, route should just use components
const Listing = () => {
    return (
        <ProductListing products={products}/>
    );
};

export default Listing;
