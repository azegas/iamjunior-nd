import BusinessCard from './BusinessCard';
import styles from './BusinessList.module.scss';
import { useFavorite } from '@/context/FavoriteContext';
import Container from '../common/Container';

const BusinessList = ({ businesses, categoryName }) => {
  const { handleFavorite } = useFavorite();

  return (
    <Container>
      <h1 className="titleSmaller">{categoryName}</h1>
      <div className={styles.businessList}>
        {businesses.map((business) => (
          <div key={business._id}>
            <BusinessCard
              business={business}
              onFavoriteClick={() => handleFavorite(business._id)}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BusinessList;
