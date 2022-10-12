// External dependencies
import React from 'react';
import Pagination from '../components/Pagination';

// Local dependencies
import Products from '../components/Products';

const ProductsPage = () => (
  <>
    <Pagination page={1} />
    <Products />
    <Pagination page={1} />
  </>
);

export default ProductsPage;
