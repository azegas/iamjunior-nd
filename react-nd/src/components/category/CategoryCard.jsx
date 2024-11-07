import styles from './CategoryCard.module.scss';
import { NavLink } from 'react-router-dom';

const CategoryCard = ({ service, className, businesses, showCount }) => {
    return (
        <NavLink to={`/search/${service.name}`} className={`${styles.categoryCard} ${className}`}>
            <img src={service.icon} alt={service.name} />
            <p>{service.name} {showCount && `(${businesses?.filter(business => business.category === service.name).length || 0})`}</p>
        </NavLink>
    );
};

export default CategoryCard;
