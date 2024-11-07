import Hero from '../components/common/Hero';
import Loading from '../components/common/Loading';
import BusinessList from '../components/business/BusinessList';
import Error from '../components/common/Error';
import useFetchFile from '../hooks/use-fetch';

const Home = () => {
    const { services, businesses, errors, isLoading } = useFetchFile();

    return (
        <>
            {/* Show error message if there is an error */}
            {errors && errors.map((error, index) => (
                <Error key={index} message={error.message} />
            ))}
            
            {/* Show loading component while fetching data */}
            {isLoading && <Loading />}

            {/* Show hero and business list components only if data is fetched */}
            {!isLoading && services && <Hero services={services} />}
            {!isLoading && businesses && <BusinessList businesses={businesses} />}
            
        </>
    );
};

export default Home;
