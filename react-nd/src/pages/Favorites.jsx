import BusinessList from '../components/business/BusinessList';
import useFetchFile from '../hooks/use-fetch';
import { useFavorite } from '../context/FavoriteContext';
import '../styles/global.scss';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
    const { businesses } = useFetchFile();
    const { favorites } = useFavorite();
    const navigate = useNavigate();
    
    const filteredBusinesses = businesses
    ? businesses.filter(business => favorites.includes(business.id))
    : [];

    if (favorites.length === 0) {
        return <div className="container middleOfPage">No favorites yet. Please add some! <button onClick={() => navigate('/')}>Go back to the main page and add some! 🙏</button></div>;
    }

    return <BusinessList businesses={filteredBusinesses} serviceName="Favorites" />;
};

export default Favorites;