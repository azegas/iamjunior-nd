import Hero from '../components/common/Hero';
import Loading from '../components/common/Loading';
import BusinessList from '../components/business/BusinessList';
import Error from '../components/common/Error';
import { useQuery } from '@tanstack/react-query';
import fetchCategories from '../api/fetchCategories';
import fetchBusinesses from '../api/fetchBusinesses';
import { useState } from 'react';
import SearchInput from '../components/common/SearchInput';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const {
    data: categories,
    isLoading: isLoadingCategories,
    error: errorsCategories,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: Infinity,
  });

  const {
    data: businesses,
    isLoading: isLoadingBusinesses,
    error: errorsBusinesses,
  } = useQuery({
    queryKey: ['businesses'],
    queryFn: fetchBusinesses,
    staleTime: Infinity,
  });

  // Filter businesses based on the search query
  const filteredBusinesses =
    businesses?.filter((business) =>
      business.name.toLowerCase().includes(searchQuery.toLowerCase()),
    ) || [];

  return (
    <>
      {errorsCategories && <Error message={errorsCategories.message} />}
      {errorsBusinesses && <Error message={errorsBusinesses.message} />}
      {(isLoadingCategories || isLoadingBusinesses) && <Loading />}
      {!isLoadingCategories && categories && <Hero categories={categories} />}

      {!isLoadingBusinesses && (
        <>
          <h1 style={{ textAlign: 'center', padding: '20px' }}>
            Search through {businesses?.length} businesses
          </h1>
          <SearchInput onSearch={(value) => setSearchQuery(value)} />
          <BusinessList businesses={filteredBusinesses} categoryName="" />
        </>
      )}
    </>
  );
};

export default Home;
