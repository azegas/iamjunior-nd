import { Business } from '@/components/business/types';
import { formatErrorMessage } from '@/utils/utils';

const fetchBusiness = async (id: string): Promise<Business | null> => {
  const isProd = import.meta.env.VITE_PROD === 'true';
  const apiUrl = `${isProd ? import.meta.env.VITE_SERVER_URL_PROD : import.meta.env.VITE_SERVER_URL}api/businesses/${id}`;

  try {
    // Intentionally adding a delay to simulate a long loading process. It happens only for the innitial load thanks to staleTime: Infinity
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 seconds delay

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const businessData: Partial<Business> = await response.json();

    if (!businessData) {
      throw new Error('Business not found');
    }

    return businessData as Business;
  } catch (error) {
    const errorMessage = formatErrorMessage(error);
    throw new Error(errorMessage);
  }
};

export default fetchBusiness;
