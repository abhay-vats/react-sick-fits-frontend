// External dependencies
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

// Queries and Mutations
const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;

// Helpers
const update = (cache, { data: { deleteProduct } }) =>
  cache.evict(cache.identify(deleteProduct));

// Component
const DeleteProduct = ({ id, children }) => {
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: { id },
    update,
  });

  return (
    <button
      type="button"
      disabled={loading}
      onClick={() => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure you want to delete this product?')) {
          deleteProduct().catch((err) => alert(err.message));
        }
      }}
    >
      {children}
    </button>
  );
};

export default DeleteProduct;
