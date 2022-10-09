// External dependencies
import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import styled from 'styled-components';

// Local dependencies
import DisplayError from './ErrorMessage';

// Query
export const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      price
      description
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

// Styles
const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  gap: 2rem;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const SingleProduct = ({ id }) => {
  const { loading, error, data } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });

  if (loading) return <div>Loading...</div>;

  if (error) return <DisplayError error={error} />;

  const {
    Product: {
      name,
      description,
      photo: {
        altText,
        image: { publicUrlTransformed },
      },
    },
  } = data;

  return (
    <ProductStyles>
      <Head>
        <title>Sick Fits | {name}</title>
      </Head>
      <img src={publicUrlTransformed} alt={altText} />
      <div className="details">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </ProductStyles>
  );
};

export default SingleProduct;
