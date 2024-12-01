import { BookingBusinessIdObject } from '@/components/booking/types';
import styles from './BookingsCard.module.scss';
import { Link } from 'react-router-dom';

const BookingsCard = ({ booking }: { booking: BookingBusinessIdObject }) => {
  return (
    <Link to={`/business/details/${booking.businessId._id}`} className={styles.bookingCard}>
      <div className={styles.left}>
        <img src={booking.businessId.images[0]} alt="Business Image" />
      </div>
      <div className={styles.right}>
        <h3>{booking.businessId.name}</h3>
        <p>{booking.businessId.worker}</p>
        <p>{booking.businessId.address}</p>
        <p>Service on: {booking.date}</p>
        <p>Status: {booking.status}</p>
      </div>
    </Link>
  );
};

export default BookingsCard;
