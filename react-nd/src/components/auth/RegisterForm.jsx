import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import styles from './RegisterForm.module.scss';
import '../../styles/global.scss';
import { toast } from 'react-toastify';

const RegisterForm = () => {
    const { saveUser } = useUser();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.length < 3) {
            setUsernameError('Username must be at least 3 characters long.');
            return;
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailError('Invalid email format.');
            return;
        }
        setUsernameError('');
        setEmailError('');
        const userData = { username, password, email };
        saveUser(userData);
        toast.success(`Registered successfully, hello ${username}!`);
        navigate('/');
    };

    return (
        <div className={styles.register}>
            <h1 className="title">Register</h1>
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
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
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
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;