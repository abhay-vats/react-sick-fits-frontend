// External dependencies
import { gql, useMutation, useQuery } from '@apollo/client';

// Local dependencies
import DisplayError from './ErrorMessage';
import { SINGLE_PRODUCT_QUERY } from './SingleProduct';
import { useForm } from '../lib/useForm';

// Styles
import Form from './styles/Form';

// Query
const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
    }
  }
`;

// Component
const UpdateProduct = ({ id }) => {
  const { loading, error, data } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });

  const [updateProduct, { loading: updateLoading, error: updateError }] =
    useMutation(UPDATE_PRODUCT_MUTATION);

  const { values, handleChange, clearForm } = useForm(data?.Product);

  if (loading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  if (error) return <DisplayError error={error} />;

  const { name = '', price = '', description = '' } = values;

  return (
    <div>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          await updateProduct({ variables: { id, ...values } });
          clearForm();
        }}
      >
        <DisplayError error={updateError} />
        <fieldset disabled={updateLoading} aria-busy={updateLoading}>
          <label htmlFor="image">
            Image
            <input
              required
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="price">
            Price
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Enter Price"
              value={price}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              id="description"
              name="description"
              placeholder="Enter Description"
              value={description}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Update Product</button>
        </fieldset>
      </Form>
    </div>
  );
};

export default UpdateProduct;
