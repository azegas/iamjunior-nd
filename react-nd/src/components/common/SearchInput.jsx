import styles from './SearchInput.module.scss';

const SearchInput = () => {

    const handleChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <div className={styles.searchInput}>
            <input type="text" placeholder="Search for a service" onChange={handleChange} />
            <button>Search</button>
        </div>
    );
};

export default SearchInput;
