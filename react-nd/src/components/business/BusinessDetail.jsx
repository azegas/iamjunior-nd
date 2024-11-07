import { useParams } from 'react-router-dom';
import useFetchFile from '../../hooks/use-fetch';
import Loading from '../common/Loading';
import Error from '../common/Error';
import styles from './BusinessDetail.module.scss';
import '../../styles/global.scss';

const BusinessDetail = () => {
    const { id } = useParams();
    const { businesses, error} = useFetchFile();

    if (!businesses) return <Loading />;

    if (error) return <Error message={error} />;

    // Find the specific business by id
    const business = businesses ? businesses.find(b => b.id === parseInt(id)) : null;

    if (business) {
        return (
            <div className="container">
                <h1 className="title">{business.name}</h1>
                <img src={business.image} alt={business.name} className={styles.businessImage} />
                <p><strong>Category:</strong> {business.category}</p>
                <p><strong>Description:</strong> {business.description}</p>
                <p><strong>Address:</strong> {business.address}</p>
                <p><strong>Contact Person:</strong> {business.worker}</p>
            </div>
        );
    }

    return null;
}

export default BusinessDetail;