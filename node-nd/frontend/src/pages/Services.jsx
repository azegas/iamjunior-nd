import '../styles/global.scss';
import useFetchBusinesses from '../hooks/use-fetch-businesses';
import Container from '../components/common/Container';

const Services = () => {
  const { businesses } = useFetchBusinesses();
  return (
    <Container>
      <h1 className="title">Our Services</h1>
      <p>{businesses ? businesses.length : 0} services available.</p>
      <p className="text">Details about the services we offer.</p>
    </Container>
  );
};

export default Services;
