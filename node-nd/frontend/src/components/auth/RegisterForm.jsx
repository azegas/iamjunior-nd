import React, { useState } from 'react';
import { useUser } from '@/context/UserContext';
import { useNavigate } from 'react-router-dom';
import InputField from '@/components/common/InputField';
import styles from './RegisterForm.module.scss';
import '@/styles/global.scss';
import { toast } from 'react-toastify';

const RegisterForm = () => {
  const { saveUserToContext } = useUser();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateUsername();
    if (usernameError) return;

    const userData = { username, password, email };
    // check if we are in production or development, and set the api url accordingly (from .env file)
    const isProd = import.meta.env.VITE_PROD === 'true';

    try {
      const apiUrl = `${isProd ? import.meta.env.VITE_SERVER_URL_PROD : import.meta.env.VITE_SERVER_URL}api/auth/register`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      handleRegistrationResponse(response, data);
    } catch {
      toast.error('An error occurred during registration. Please try again.');
    }
  };

  const validateUsername = () => {
    if (username.length < 3) {
      setUsernameError('Username must be at least 3 characters long.');
    } else {
      setUsernameError('');
    }
  };

  const handleRegistrationResponse = (response, data) => {
    if (response.ok) {
      saveUserToContext(data.user);
      toast.success(`Registered successfully, hello ${username}!`);
      navigate('/');
    } else {
      if (data.message) {
        toast.error(data.message);
      }
    }
  };

  return (
    <div className={styles.register}>
      <h1 className="title">Register</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Username:"
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          error={usernameError}
          errorMessage={usernameError}
        />
        <InputField
          label="Email:"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          label="Password:"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
