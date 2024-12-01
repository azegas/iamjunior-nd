import '../styles/global.scss';
import fetchBusinesses from '../api/fetchBusinesses';
import Container from '../components/common/Container';
import { useQuery } from '@tanstack/react-query';

const Services = () => {
  const {
    data: businesses,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['businesses'],
    queryFn: fetchBusinesses,
    staleTime: Infinity, // don't refetch categories if they are already fetched and are in cache
  });

  if (error) return <p>Error loading services: {error.message}</p>;

  return (
    <Container>
      <h1 className="title">Our Services</h1>
      <p>
        {isLoading
          ? 'Loading services...'
          : `${businesses ? businesses.length : 0} services available.`}
      </p>
      <p className="text">Details about the services we offer.</p>
    </Container>
  );
};

export default Services;
