// Local dependencies
import { useForm } from '../lib/useForm';
import Form from './styles/Form';

const CreateProduct = () => {
  const { values, handleChange } = useForm({
    name: '',
    price: '',
    description: '',
  });

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.dir(values);
        }}
      >
        <fieldset>
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
