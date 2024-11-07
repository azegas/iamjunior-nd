import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchFile from '../hooks/use-fetch';
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';
import BusinessList from '../components/business/BusinessList';
import CategoryList from '../components/category/CategoryList';
import '../styles/global.scss';
import styles from '../components/common/Search.module.scss';

const Search = () => {
    const { serviceName } = useParams();
    const { services, businesses, errors, isLoading } = useFetchFile();
    const [filteredBusinesses, setFilteredBusinesses] = useState([]);

    useEffect(() => {
        if (businesses) {
            const filtered = businesses.filter(business => business.category.toLowerCase() === serviceName.toLowerCase());
            setFilteredBusinesses(filtered);
        } else {
            setFilteredBusinesses([]);
        }

    }, [serviceName, businesses]);
    
    return (
        <>
            {/* Show error message if there is an error */}
            {errors && errors.map((error, index) => (
                <Error key={index} message={error.message} />
            ))}

            {/* Show loading component while fetching data */}
            {isLoading && <Loading />}

            {/* Show search container only if data is fetched and loading is stopped */}
            {!isLoading &&
            <div className="container">
                <div className={styles.searchContainer}>
                    <div className={styles.searchSidebar}>
                        <h1 className="title">Categories</h1>
                        {services && <CategoryList services={services} businesses={businesses} classNameList={styles.categoryListSidebar} classNameCard={styles.categoryCardSidebar} showCount={true}/>}
                    </div>
                    {filteredBusinesses.length > 0 && <BusinessList businesses={filteredBusinesses} serviceName={serviceName}/>}
                </div>
            </div>}
        </>
    );
}

export default Search;