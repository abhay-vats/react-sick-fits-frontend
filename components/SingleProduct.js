// External dependencies
import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';

// Local dependencies
import DisplayError from './ErrorMessage';

const SINGLE_PRODUCT_QUERY = gql`
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
    <div>
      <Head>
        <title>Sick Fits | {name}</title>
      </Head>
      <img src={publicUrlTransformed} alt={altText} />
      <div className="details">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
