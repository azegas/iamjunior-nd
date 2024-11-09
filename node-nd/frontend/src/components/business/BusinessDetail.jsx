import { useParams } from 'react-router-dom';
import useFetchBusiness from '@/hooks/use-fetch-business';
import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';
import styles from './BusinessDetail.module.scss';
import '@/styles/global.scss';
import Container from '@/components/common/Container';

const BusinessDetail = () => {
  const { id } = useParams();
  const { business, errorsBusiness, isLoadingBusiness } = useFetchBusiness(id);

  if (isLoadingBusiness) return <Loading />;

  if (errorsBusiness) return <Error message={errorsBusiness} />;

  if (business) {
    return (
      <Container>
        <h1 className="title">{business.name}</h1>
        <img
          src={business.images[0]}
          alt={business.name}
          className={styles.businessImage}
        />
        <p>
          <strong>Category:</strong> {business.category.name}
        </p>
        <p>
          <strong>Description:</strong> {business.description}
        </p>
        <p>
          <strong>Address:</strong> {business.address}
        </p>
        <p>
          <strong>Contact Person:</strong> {business.worker}
        </p>
      </Container>
    );
  }

  return null;
};

export default BusinessDetail;
