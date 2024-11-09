import Hero from '../components/common/Hero';
import Loading from '../components/common/Loading';
import BusinessList from '../components/business/BusinessList';
import Error from '../components/common/Error';
import useFetchCategories from '../hooks/use-fetch-categories';
import useFetchBusinesses from '../hooks/use-fetch-businesses';

const Home = () => {
  const { categories, errorsCategories, isLoadingCategories } =
    useFetchCategories();
  const { businesses, errorsBusinesses, isLoadingBusinesses } =
    useFetchBusinesses();

  return (
    <>
      {/* Show error message if there is an error */}
      {errorsCategories &&
        errorsCategories.map((error, index) => (
          <Error key={index} message={error.message} />
        ))}
      {errorsBusinesses &&
        errorsBusinesses.map((error, index) => (
          <Error key={index} message={error.message} />
        ))}

      {/* Show loading component while fetching data */}
      {(isLoadingCategories || isLoadingBusinesses) && <Loading />}

      {/* Show hero and business list components only if data is fetched */}
      {!isLoadingCategories && categories && <Hero categories={categories} />}
      {!isLoadingBusinesses && businesses && (
        <BusinessList businesses={businesses} />
      )}
    </>
  );
};

export default Home;
