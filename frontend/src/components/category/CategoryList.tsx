import CategoryCard from './CategoryCard';
import styles from './CategoryList.module.scss';
import { Business } from '@/components/business/types';
import { Category } from './types';

type CategoryListProps = {
  categories: Category[];
  classNameList: string;
  classNameCard: string;
  businesses: Business[];
  showCount: boolean;
};

const CategoryList = ({
  categories,
  classNameList,
  classNameCard,
  businesses,
  showCount,
}: CategoryListProps) => {
  return (
    <>
      <div className={`${styles.categoryList} ${classNameList}`}>
        {categories.map((category: Category) => (
          <CategoryCard
            // key={category.id} causes "Each child in a list should have a unique "key" prop." error
            // Using a Composite Key: If category.id is not guaranteed to be unique,
            // using a combination of properties to create a unique key, like so:
            key={`${category.id}-${category.name}`}
            category={category}
            className={classNameCard}
            businesses={businesses}
            showCount={showCount}
          />
        ))}
      </div>
    </>
  );
};

export default CategoryList;
