// Local dependencies
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useForm } from '../lib/useForm';
import DisplayError from './ErrorMessage';
import Form from './styles/Form';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $price: Int!
    $description: String!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        price: $price
        description: $description
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
    }
  }
`;

const CreateProduct = () => {
  const { values, handleChange, clearForm } = useForm({
    name: '',
    price: '',
    description: '',
  });

  const [createProduct, { loading, error }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: values,
    }
  );

  return (
    <div>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          await createProduct();
          clearForm();
        }}
      >
        <DisplayError error={error} />
        <fieldset disabled={loading} aria-busy={loading}>
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
              value={values.name}
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
              value={values.price}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              id="description"
              name="description"
              placeholder="Enter Description"
              value={values.description}
              onChange={handleChange}
            />
          </label>

          <button type="submit">+ Add Product</button>
        </fieldset>
      </Form>
    </div>
  );
};

export default CreateProduct;
