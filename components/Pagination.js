// External dependencies
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

// Local dependencies
import PaginationStyles from './styles/PaginationStyles';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';

// Queries and Mutations
const PAGINATION_QUERY = gql`
  query {
    _allProductsMeta {
      count
    }
  }
`;

// Component
const Pagination = () => {
  const { loading, error, data } = useQuery(PAGINATION_QUERY);
  const {
    query: { page = 1 },
  } = useRouter();

  if (loading) return 'Loading...';
  if (error) return <DisplayError error={error} />;

  const { count } = data._allProductsMeta;
  const currentPage = parseInt(page);
  const pageCount = Math.ceil(count / perPage);

  return (
    <PaginationStyles>
      <Head>
        <title>
          Sick Fits | Page {currentPage} of {pageCount}
        </title>
      </Head>
      <Link href={`/products/${currentPage - 1}`}>
        <a aria-disabled={currentPage <= 1}>← Prev</a>
      </Link>
      <p>
        Page {currentPage} of {pageCount}
      </p>
      <p>{count} Total Items</p>
      <Link href={`/products/${currentPage + 1}`}>
        <a aria-disabled={currentPage >= pageCount}>→ Next</a>
      </Link>
    </PaginationStyles>
  );
};

export default Pagination;
