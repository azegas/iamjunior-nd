import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DateTimePicker.module.scss';
import makeBooking from '@/api/makeBookings';
import { useUser } from '@/context/UserContext';
import { toast } from 'react-toastify';
import { formatErrorMessage } from '@/utils/utils';
import { BookingBusinessIdString } from './types';

const DateTimePickerComponent = ({ businessId }: { businessId: string }) => {
  const { user } = useUser() ?? {};

  const timeSlots = [
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
  ];

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(timeSlots[0]);

  return (
    <div className={styles.dateTimePicker}>
      <h2>Select Date</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        inline
        calendarStartDay={1} // Start week on Monday
      />

      <h2>Select Time Slot</h2>
      <div className={styles.timeSlots}>
        {timeSlots.map((time) => (
          <button
            key={time}
            className={`${styles.timeSlotButton} ${
              selectedTime === time ? styles.selectedTime : ''
            }`}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </button>
        ))}
      </div>

      <h2>Your Selection</h2>
      <p>
        Date: {selectedDate ? selectedDate.toLocaleDateString() : 'Not selected'}
        <br />
        Time: {selectedTime ? selectedTime : 'Not selected'}
      </p>

      <button
        className="globalButton"
        onClick={async () => {
          if (selectedDate && selectedTime) {
            try {
              const bookingData: BookingBusinessIdString = {
                _id: '',
                businessId: businessId,
                date: selectedDate.toLocaleDateString(),
                time: selectedTime,
                userEmail: user?.email ?? '',
                status: 'pending',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              };
              await makeBooking(bookingData);
              toast.success('Appointment booked!');
            } catch (error) {
              const errorMessage = formatErrorMessage(error);
              throw new Error(errorMessage);
            }
          } else {
            alert('Please select both date and time.');
          }
        }}
      >
        Book appointment!
      </button>
    </div>
  );
};

export default DateTimePickerComponent;
