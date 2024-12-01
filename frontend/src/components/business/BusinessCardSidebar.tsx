import styles from './BusinessCardSidebar.module.scss';
import { Link } from 'react-router-dom';
import { Business } from './types';

const BusinessCardSidebar = ({ business }: { business: Business }) => {
  return (
    <Link to={`/business/details/${business._id}`} className={styles.businessLink}>
      <div className={styles.businessCard}>
        <img
          className={styles.image}
          src={
            business.images?.[0] ||
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/200px-No-Image-Placeholder.svg.png?20200912122019'
          }
          alt={business.name}
        />
        <div className={styles.info}>
          <p className={styles.name}>{business.name || 'Name not available'}</p>
          <p className={styles.worker}>{business.worker || 'Worker not available'}</p>
          <p className={styles.address}>{business.address || 'Address not available'}</p>
        </div>
      </div>
    </Link>
  );
};

export default BusinessCardSidebar;
