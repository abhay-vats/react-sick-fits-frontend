// External dependencies
import React from 'react';

// Local dependencies
import Products from '../../components/Products';
import Pagination from '../../components/Pagination';

const ProductsPage = () => (
  <>
    <Pagination />
    <Products />
    <Pagination />
  </>
);

export default ProductsPage;
