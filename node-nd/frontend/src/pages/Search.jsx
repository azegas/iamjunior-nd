import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchCategories from '../hooks/use-fetch-categories';
import useFetchBusinesses from '../hooks/use-fetch-businesses';
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';
import BusinessList from '../components/business/BusinessList';
import CategoryList from '../components/category/CategoryList';
import '../styles/global.scss';
import styles from '../components/common/Search.module.scss';
import Container from '../components/common/Container';

const Search = () => {
  const { categoryName } = useParams();
  const { categories, errorsCategories, isLoadingCategories } =
    useFetchCategories();
  const { businesses, errorsBusinesses, isLoadingBusinesses } =
    useFetchBusinesses();
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);

  useEffect(() => {
    if (businesses) {
      const filtered = businesses.filter(
        (business) => business.category.name === categoryName,
      );
      setFilteredBusinesses(filtered);
    } else {
      setFilteredBusinesses([]);
    }
  }, [categoryName, businesses]);

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

      {/* Show search container only if data is fetched and loading is stopped */}
      {!isLoadingCategories && !isLoadingBusinesses && (
        <Container>
          <div className={styles.searchContainer}>
            <div className={styles.searchSidebar}>
              <h1 className="title">Categories</h1>
              {categories && (
                <CategoryList
                  categories={categories}
                  businesses={businesses}
                  classNameList={styles.categoryListSidebar}
                  classNameCard={styles.categoryCardSidebar}
                  showCount={true}
                />
              )}
            </div>
            {filteredBusinesses.length > 0 && (
              <BusinessList
                businesses={filteredBusinesses}
                categoryName={categoryName}
              />
            )}
          </div>
        </Container>
      )}
    </>
  );
};

export default Search;
