import '../../styles/global.scss';
import { useUser } from '../../context/UserContext';
import { useFavorite } from '../../context/FavoriteContext';
import useFetchFile from '../../hooks/use-fetch';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const { user } = useUser();
    const { favorites } = useFavorite();
    const { businesses } = useFetchFile();
    const navigate = useNavigate();
    
    const filteredBusinesses = businesses
    ? businesses.filter(business => favorites.includes(business.id))
    : [];
    
    return <div className="container">
        <h1 className="title">User Dashboard</h1>
        <p><b>Username:</b> {user.username}</p>
        <p><b>Password:</b> {user.password}</p>
        <p><b>Favorites:</b> {favorites.length}. <button onClick={() => navigate('/favorites')}>View favorites</button></p>
    </div>;
}

export default UserDashboard;