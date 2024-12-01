import '@/styles/global.scss';
import { useUser } from '@/context/UserContext';
import Container from '@/components/common/Container';
import { useQuery } from '@tanstack/react-query';
import fetchBookingsByUser from '@/api/fetchBookingsByUser';
import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';
import BookingList from '@/components/booking/BookingList';
import './UserDashboard.scss';

const UserDashboard = () => {
  const { user } = useUser() ?? {};

  const {
    data: bookings,
    isLoading: isLoadingBookings,
    error: errorBookings,
  } = useQuery({
    queryKey: ['bookings'],
    queryFn: () => fetchBookingsByUser(user?.email ?? ''),
  });

  return (
    <Container>
      <h1 className="title">User Dashboard</h1>
      <p>
        <b>Username:</b> {user?.username}
      </p>

      <h2>Bookings: {bookings?.length}</h2>

<br/>
      <p>Currently if there are no bookings - will break :) will fix it after midnightttt!!!</p>


      <div className="bookingsContainer">
        {isLoadingBookings && <Loading />}
        {errorBookings && <Error message={errorBookings.message} />}
        {!isLoadingBookings && bookings && <BookingList bookings={bookings} />}
      </div>
    </Container>
  );
};

export default UserDashboard;
