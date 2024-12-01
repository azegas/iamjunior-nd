import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchCategories from '../api/fetchCategories';
import fetchBusinesses from '../api/fetchBusinesses';
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';
import BusinessList from '../components/business/BusinessList';
import CategoryList from '../components/category/CategoryList';
import '../styles/global.scss';
import styles from '../components/common/Categories.module.scss';
import Container from '../components/common/Container';

const Search = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  const {
    data: categories,
    isLoading: isLoadingCategories,
    error: errorsCategories,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: Infinity, // Do not refetch categories
  });

  const {
    data: businesses,
    isLoading: isLoadingBusinesses,
    error: errorsBusinesses,
  } = useQuery({
    queryKey: ['businesses'],
    queryFn: fetchBusinesses,
    staleTime: Infinity, // Do not refetch businesses
  });

  // Derive filtered businesses directly whenever the categoryName changes
  const filteredBusinesses =
    businesses?.filter((business) => business.category?.name === categoryName) || [];

  return (
    <>
      {/* Show error messages */}
      {errorsCategories && (
        <Error message={`Error fetching categories: ${String(errorsCategories)}`} />
      )}
      {errorsBusinesses && (
        <Error message={`Error fetching businesses: ${String(errorsBusinesses)}`} />
      )}

      {/* Show loading component */}
      {(isLoadingCategories || isLoadingBusinesses) && <Loading />}

      {/* Show content if loading is complete */}
      {!isLoadingCategories && !isLoadingBusinesses && (
        <Container>
          <div className={styles.searchContainer}>
            <div className={styles.searchSidebar}>
              <h1 className="title">Categories</h1>
              {categories && (
                <CategoryList
                  categories={categories}
                  businesses={businesses || []}
                  classNameList={styles.categoryListSidebar}
                  classNameCard={styles.categoryCardSidebar}
                  showCount={true}
                />
              )}
            </div>
            {filteredBusinesses.length > 0 && (
              <BusinessList businesses={filteredBusinesses} categoryName={categoryName || ''} />
            )}
          </div>
        </Container>
      )}
    </>
  );
};

export default Search;
