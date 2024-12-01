import React, { useState } from 'react';
import styles from './SearchInput.module.scss';

const SearchInput = ({ onSearch }: { onSearch: (value: string) => void }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    onSearch(newValue);
  };

  return (
    <div className={styles.searchInput}>
      <input type="text" placeholder="Search..." onChange={handleChange} value={searchValue} />
    </div>
  );
};

export default SearchInput;
