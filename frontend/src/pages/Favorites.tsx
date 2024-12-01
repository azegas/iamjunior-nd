import BusinessList from '../components/business/BusinessList';
import fetchBusinesses from '../api/fetchBusinesses';
import { useQuery } from '@tanstack/react-query';
import { useFavorite } from '../context/FavoriteContext';
import { useUser } from '../context/UserContext';
import '../styles/global.scss';
import { useNavigate } from 'react-router-dom';
import { User } from '../components/auth/types';

const Favorites = () => {
  const {
    data: businesses,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['businesses'],
    queryFn: fetchBusinesses,
    staleTime: Infinity, // don't refetch businesses if they are already fetched and are in cache
  });

  const favoriteContext = useFavorite();
  const userContext = useUser();
  const favorites: string[] = favoriteContext?.favorites || [];
  const user: User | undefined = userContext?.user ?? undefined;
  const navigate = useNavigate();

  const filteredBusinesses = businesses
    ? businesses.filter((business) => favorites.includes(business._id))
    : [];

  if (error) return <p>Error loading businesses: {error.message}</p>;

  if (favorites.length === 0) {
    return user ? (
      <div className="container middleOfPage">
        No favorites yet. Visit homepage to discover businesses!{' '}
        <button onClick={() => navigate('/')}>Show me all the businesses</button>
      </div>
    ) : (
      <div className="container middleOfPage">
        No favorites yet. Please login first to add some!{' '}
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
    );
  }

  return (
    <div>
      {isLoading ? (
        <p>Loading businesses...</p>
      ) : (
        <BusinessList businesses={filteredBusinesses} categoryName="Favorites" />
      )}
    </div>
  );
};

export default Favorites;
