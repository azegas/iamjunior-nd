import '../styles/global.scss';
import { useUser } from '../context/UserContext';

const Contact = () => {
    const { user } = useUser();

    return (
        <div className="container">
            <h1 className="title">Contact Us, {user ? user.username : ''}</h1>
            <p className="text">Details about how to contact us.</p>
        </div>
    );
}

export default Contact;