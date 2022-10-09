// Local dependencies
import UpdateProduct from '../components/UpdateProduct';

const UpdatePage = ({ query: { id } }) => (
  <div>
    <UpdateProduct id={id} />
  </div>
);

export default UpdatePage;
