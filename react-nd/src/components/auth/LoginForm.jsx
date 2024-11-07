import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.scss';
import '../../styles/global.scss';
import { toast } from 'react-toastify';

const LoginForm = () => {
    const { saveUser } = useUser();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.length < 3) {
            setUsernameError('Username must be at least 3 characters long.');
            return;
        }
        setUsernameError('');
        const userData = { username, password };
        saveUser(userData);
        toast.success(`Login successful, hello ${username}! You can now add businesses to your favorites.`);
        navigate('/');
    };

    return (
        <div className={styles.login}>
            <h1 className="title">Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    {usernameError && <div style={{ color: 'red' }}>{usernameError}</div>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
