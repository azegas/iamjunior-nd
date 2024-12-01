import styles from './BusinessCard.module.scss';
import { Link } from 'react-router-dom';
import { useUser } from '@/context/UserContext';
import { useFavorite } from '@/context/FavoriteContext';
import { Business } from './types';

// The onFavoriteClick function is a void function, meaning it does not return any value.
const BusinessCard = ({
  business,
  onFavoriteClick,
}: {
  business: Business;
  onFavoriteClick: () => void;
}) => {
  const { user } = useUser() ?? {};
  const { favorites } = useFavorite() ?? {};

  return (
    <div className={styles.businessCard}>
      {user && (
        <img
          className={styles.favoriteButton}
          src={
            favorites?.includes(business._id)
              ? 'https://img.icons8.com/?size=100&id=DFU1kReSUccu&format=png&color=000000'
              : 'https://img.icons8.com/?size=100&id=87&format=png&color=FF0000'
          }
          alt="Favorite"
          onClick={onFavoriteClick}
        />
      )}

      <Link to={`/business/details/${business._id}`} className={styles.businessLink}>
        <img
          className={styles.image}
          src={
            business.images?.[0] ||
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/200px-No-Image-Placeholder.svg.png?20200912122019'
          }
          alt={business.name}
        />
        <div className={styles.info}>
          <p className={styles.category}>{business.category?.name || 'Category not available'}</p>
          <p className={styles.name}>{business.name || 'Name not available'}</p>
          <p className={styles.worker}>{business.worker || 'Worker not available'}</p>
          <p className={styles.address}>{business.address || 'Address not available'}</p>
        </div>
        <button className={styles.bookButton}>Book Now</button>
      </Link>
    </div>
  );
};

export default BusinessCard;
