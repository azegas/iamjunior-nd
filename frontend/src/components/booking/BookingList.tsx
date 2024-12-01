import { BookingBusinessIdObject } from '@/components/booking/types';
import BookingsCard from '@/components/booking/BookingsCard';
import styles from './BookingList.module.scss';

const BookingList = ({ bookings }: { bookings: BookingBusinessIdObject[] }) => {
  return (
    <>
      <div className={styles.bookingsList}>
        {bookings.map((booking) => (
          <BookingsCard key={booking._id} booking={booking} />
        ))}
      </div>
    </>
  );
};

export default BookingList;
