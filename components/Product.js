// External dependencies
import Link from 'next/link';

// Local dependencies
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import Title from './styles/Title';
import formatMoney from '../lib/formatMoney';

export default function Product({ product }) {
  const { id, name, price, description } = product;

  return (
    <ItemStyles>
      <img src={product?.photo?.image?.publicUrlTransformed} alt={name} />
      <Title>
        <Link href={`/product/${id}`}>{name}</Link>
      </Title>
      <PriceTag>{formatMoney(price)}</PriceTag>
      <p>{description}</p>
    </ItemStyles>
  );
}
