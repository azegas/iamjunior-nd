import BusinessCard from './BusinessCard';
import styles from './BusinessList.module.scss';
import { useFavorite } from '@/context/FavoriteContext';
import Container from '../common/Container';
import { Business } from './types';

type BusinessListProps = {
  businesses: Business[];
  categoryName: string;
};

const BusinessList = ({ businesses, categoryName }: BusinessListProps) => {
  const { handleFavorite } = useFavorite() ?? {};

  return (
    <Container>
      <h1 className="titleSmaller">{categoryName}</h1>
      <div className={styles.businessList}>
        {businesses.length > 0 ? (
          businesses.map((business) => (
            <div key={business._id}>
              <BusinessCard
                business={business}
                onFavoriteClick={() => handleFavorite?.(business._id)}
              />
            </div>
          ))
        ) : (
          <p>No businesses found.</p>
        )}
      </div>
    </Container>
  );
};

export default BusinessList;
