// External dependencies
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';

// Local dependencies
import Product from './Product';

// Queries
export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      price
      name
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

// Styles
const ProductListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 60px;
`;

export default function Products() {
  const { loading, error, data } = useQuery(ALL_PRODUCTS_QUERY);

  if (loading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  if (error)
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );

  return (
    <div>
      <ProductListStyles>
        {data.allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductListStyles>
    </div>
  );
}
