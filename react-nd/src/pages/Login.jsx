import LoginForm from '../components/auth/LoginForm';
import '../styles/global.scss';  
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="container middleOfPage">
            <LoginForm />
            <p>Not a user? <button onClick={() => navigate('/register')}>Register</button></p>
        </div>
    );
}

export default Login;