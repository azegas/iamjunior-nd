import styles from './CategoryCard.module.scss';
import { NavLink } from 'react-router-dom';
import { Business } from '@/components/business/types';
import { Category } from './types';

type CategoryCardProps = {
  category: Category;
  className: string;
  businesses: Business[];
  showCount: boolean;
};

const CategoryCard = ({ category, className, businesses, showCount }: CategoryCardProps) => {
  return (
    <NavLink to={`/categories/${category.name}`} className={`${styles.categoryCard} ${className}`}>
      <img src={category.icon} alt={category.name} />
      <p>
        {category.name}{' '}
        {showCount &&
          `(${businesses?.filter((business: Business) => business.category.name === category.name).length || 0})`}
      </p>
    </NavLink>
  );
};

export default CategoryCard;
