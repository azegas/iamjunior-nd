import styles from './Hero.module.scss';
import CategoryList from '../category/CategoryList';
import SearchInput from './SearchInput';

const Hero = ({ services }) => {
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.heroTitle}>
                    <h1>Find Home <span>Service/Repair</span> Near You</h1>
                </div>
                <div className={styles.heroSubtitle}>
                    <p>Explore the best home services in your area</p>
                </div>

                <SearchInput />
                <CategoryList services={services} className={styles.categoryList} showCount={false} />
                <hr />
            </div>
        </>
    );
};

export default Hero;