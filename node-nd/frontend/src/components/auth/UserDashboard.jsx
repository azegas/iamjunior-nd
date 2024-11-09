import '@/styles/global.scss';
import { useUser } from '@/context/UserContext';
import Container from '@/components/common/Container';

const UserDashboard = () => {
  const { user } = useUser();

  return (
    <Container>
      <h1 className="title">User Dashboard</h1>
      <p>
        <b>Username:</b> {user.username}
      </p>
    </Container>
  );
};

export default UserDashboard;
