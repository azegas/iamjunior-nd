import styles from './DropdownProfile.module.scss';
import { useState } from 'react';
import { useUser } from '@/context/UserContext';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const DropdownProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, clearUserFromContext } = useUser() ?? {};

  const handleCloseDropdown = () => setIsOpen(false);

  return (
    <>
      <p className={styles.dropdownTrigger} onClick={() => setIsOpen(!isOpen)}>
        {/* 👋 {user?.username?.charAt(0).toUpperCase()} */}
        👋 {user?.username}
      </p>
      {isOpen && (
        <div className={styles.dropdown}>
          <ul>
            <li>
              <NavLink
                to="/dashboard"
                className={() => ''} // Prevents the active class
                onClick={handleCloseDropdown}
              >
                My Dashboard!
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={() => ''} // Prevents the active class
                onClick={() => {
                  handleCloseDropdown();
                  clearUserFromContext?.();
                  toast.success(`Logged out successfully, bye ${user?.username}!`);
                }}
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default DropdownProfile;
