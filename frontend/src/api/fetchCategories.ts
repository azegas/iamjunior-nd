import { Category } from '@/components/category/types';
import { formatErrorMessage } from '@/utils/utils';

const fetchCategories = async (): Promise<Category[]> => {
  const isProd = import.meta.env.VITE_PROD === 'true';
  const apiUrl = `${isProd ? import.meta.env.VITE_SERVER_URL_PROD : import.meta.env.VITE_SERVER_URL}api/categories`;

  try {
    // Intentionally adding a delay to simulate a long loading process. It happens only for the innitial load thanks to staleTime: Infinity
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 seconds delay

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const categoriesData: Partial<Category>[] = await response.json();

    if (!categoriesData || categoriesData.length === 0) {
      throw new Error('Categories not found');
    }

    return categoriesData as Category[];
  } catch (error) {
    const errorMessage = formatErrorMessage(error);
    throw new Error(errorMessage);
  }
};

export default fetchCategories;
