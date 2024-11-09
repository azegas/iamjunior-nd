import CategoryCard from './CategoryCard';
import styles from './CategoryList.module.scss';

const CategoryList = ({
  categories,
  classNameList,
  classNameCard,
  businesses,
  showCount,
}) => {
  return (
    <>
      <div className={`${styles.categoryList} ${classNameList}`}>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
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
