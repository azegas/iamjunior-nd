import BusinessCard from './BusinessCard';
import styles from './BusinessList.module.scss';
import { useFavorite } from '../../context/FavoriteContext';

const BusinessList = ({ businesses, serviceName }) => {
    const { handleFavorite } = useFavorite();

    return (
        <div className="container">
                <h1 className="titleSmaller">{serviceName}</h1>
                <div className={styles.businessList}>
                    {businesses.map((business) => (
                        <div key={business.id}>
                            <BusinessCard business={business} onFavoriteClick={() => handleFavorite(business.id)} />
                        </div>
                    ))}
                </div>
            </div>  
    );
};

export default BusinessList;