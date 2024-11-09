import { useState, useEffect } from 'react';

const useFetchBusiness = (id) => {
  const [business, setBusiness] = useState(null);
  const [errorsBusiness, setErrorsBusiness] = useState();
  const [isLoadingBusiness, setIsLoadingBusiness] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // check if we are in production or development, and set the api url accordingly (from .env file)
      const isProd = import.meta.env.VITE_PROD === 'true';
      try {
        const apiUrl = `${isProd ? import.meta.env.VITE_SERVER_URL_PROD : import.meta.env.VITE_SERVER_URL}api/businesses/${id}`;
        const businessResponse = await fetch(apiUrl);
        const businessData = await businessResponse.json();

        if (!businessData) {
          setErrorsBusiness([{ message: 'Business not found' }]);
        } else {
          setBusiness(businessData);
        }

        setIsLoadingBusiness(false); // Stop loading regardless of success or errors
      } catch {
        setErrorsBusiness([{ message: 'Failed to fetch data' }]);
        setIsLoadingBusiness(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return { business, errorsBusiness, isLoadingBusiness };
};

export default useFetchBusiness;
