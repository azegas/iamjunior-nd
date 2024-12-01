import styles from './Hero.module.scss';
import CategoryList from '@/components/category/CategoryList';
import { Category } from '@/components/category/types';

const Hero = ({ categories }: { categories: Category[] }) => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroTitle}>
          <h1>
            Find Home <span>Service/Repair</span> Near You
          </h1>
        </div>
        <div className={styles.heroSubtitle}>
          <p>Explore the best home services in your area</p>
        </div>

        <CategoryList
          categories={categories}
          classNameList={styles.categoryList}
          classNameCard={styles.categoryCard}
          showCount={false}
          businesses={[]}
        />
        <hr />
      </div>
    </>
  );
};

export default Hero;
