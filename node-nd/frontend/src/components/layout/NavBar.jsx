import Logo from '@/assets/logo.png';
import { useNavigate, NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import { clearLocalStorage } from '@/utils/utils';
import { useUser } from '@/context/UserContext';
import { useFavorite } from '@/context/FavoriteContext';
import { toast } from 'react-toastify';
import Container from '@/components/common/Container';
import routes from '@/routing/routes';

const menuItemsLeft = [
  { link: routes.home, title: 'Home Service' },
  { link: routes.services, title: 'Services' },
  { link: routes.about, title: 'About' },
  { link: routes.contact, title: 'Contact' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { user, clearUserFromContext } = useUser();
  const { favorites } = useFavorite();

  return (
    <nav>
      <Container>
        <div className={styles.navbar}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <img
                className={styles.logo}
                src={Logo}
                alt="Home Service Logo"
                onClick={() => navigate('/')}
              />
            </div>
            <div className={styles.links}>
              {menuItemsLeft.map(({ link, title }) => (
                <NavLink key={link} to={link}>
                  {title}
                </NavLink>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <NavLink to="/favorites">
              <img
                className={styles.favoriteIcon}
                src="https://img.icons8.com/?id=DFU1kReSUccu&format=png&color=000000"
                alt="Favorites Icon"
              />
              <span>{favorites.length}</span>
            </NavLink>

            {user ? (
              <>
                <div className={styles.links}>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    {user.username} Dashboard!
                  </NavLink>
                </div>
                <button
                  onClick={() => {
                    clearUserFromContext();
                    toast.success(
                      `Logged out successfully, bye ${user.username}!`,
                    );
                    navigate('/');
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <button onClick={() => navigate('/login')}>Login/Signup</button>
            )}

            {import.meta.env.VITE_PROD === 'false' && (
              <>
                <img
                  style={{ width: '30px' }}
                  onClick={clearLocalStorage}
                  src="https://img.icons8.com/?size=100&id=cGxj6HzPbSdJ&format=png&color=000000"
                />
                <span
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    backgroundColor: 'red',
                    padding: '5px',
                    borderRadius: '5px',
                  }}
                >
                  DEV
                </span>
              </>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
