import { formatErrorMessage } from '@/utils/utils';
import { BookingBusinessIdString } from '@/components/booking/types';

const makeBooking = async (
  bookingData: BookingBusinessIdString,
): Promise<BookingBusinessIdString> => {
  const isProd = import.meta.env.VITE_PROD === 'true';
  const apiUrl = `${isProd ? import.meta.env.VITE_SERVER_URL_PROD : import.meta.env.VITE_SERVER_URL}api/bookings`;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      throw new Error(formatErrorMessage(response.status));
    }

    const bookingResponse = await response.json();
    return bookingResponse;
  } catch (error) {
    throw new Error(formatErrorMessage(error));
  }
};

export default makeBooking;
