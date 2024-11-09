import styles from './CategoryCard.module.scss';
import { NavLink } from 'react-router-dom';

const CategoryCard = ({ category, className, businesses, showCount }) => {
  return (
    <NavLink
      to={`/search/${category.name}`}
      className={`${styles.categoryCard} ${className}`}
    >
      <img src={category.icon} alt={category.name} />
      <p>
        {category.name}{' '}
        {showCount &&
          `(${businesses?.filter((business) => business.category.name === category.name).length || 0})`}
      </p>
    </NavLink>
  );
};

export default CategoryCard;
