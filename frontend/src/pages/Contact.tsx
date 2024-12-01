import '../styles/global.scss';
import { useUser } from '../context/UserContext';
import Container from '../components/common/Container';
import { User } from '../components/auth/types';

const Contact = () => {
  const userContext = useUser();
  const user: User | undefined = userContext?.user ?? undefined;

  return (
    <Container>
      <h1 className="title">Contact Us, {user?.username || ''}</h1>
      <p className="text">Details about how to contact us.</p>
    </Container>
  );
};

export default Contact;
