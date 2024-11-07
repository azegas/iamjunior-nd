import styles from './BusinessCard.module.scss';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useFavorite } from '../../context/FavoriteContext';


const BusinessCard = ({ business, onFavoriteClick }) => {
    const { user } = useUser();
    const { favorites } = useFavorite();

    return (
        <div className={styles.businessCard}>
            
            {user && <img className={styles.favoriteButton} 
            src={favorites.includes(business.id) ? "https://img.icons8.com/?size=100&id=DFU1kReSUccu&format=png&color=000000" : "https://img.icons8.com/?size=100&id=12306&format=png&color=000000"} 
            alt="Favorite" onClick={onFavoriteClick} />}

            <Link to={`/business/${business.id}`} className={styles.businessLink}>
                <img className={styles.image} src={business.image} alt={business.name} />
                <div className={styles.info}>
                    <p className={styles.category}>{business.category}</p>
                    <p className={styles.name}>{business.name}</p>
                    <p className={styles.worker}>{business.worker}</p>
                    <p className={styles.address}>{business.address}</p>
                </div>
                <button className={styles.bookButton}>Book Now</button>
            </Link>
        </div>
    );
};

export default BusinessCard;