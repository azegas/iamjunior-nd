import { useState, useEffect } from 'react';

const useFetchCategories = () => {
  const [categories, setCategories] = useState(null);
  const [errorsCategories, setErrorsCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      // check if we are in production or development, and set the api url accordingly (from .env file)
      const isProd = import.meta.env.VITE_PROD === 'true';

      try {
        const apiUrl = `${isProd ? import.meta.env.VITE_SERVER_URL_PROD : import.meta.env.VITE_SERVER_URL}api/categories`;
        const categoriesResponse = await fetch(apiUrl);
        const categoriesData = await categoriesResponse.json();

        if (!categoriesData) {
          setErrorsCategories([{ message: 'Categories not found' }]);
        } else {
          setCategories(categoriesData);
        }

        setIsLoadingCategories(false); // Stop loading regardless of success or errors
      } catch {
        setErrorsCategories([{ message: 'Failed to fetch data' }]);
        setIsLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, errorsCategories, isLoadingCategories };
};

export default useFetchCategories;
