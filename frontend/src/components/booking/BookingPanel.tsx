import styles from './BookingPanel.module.scss';
import '@/styles/global.scss';
import DateTimePickerComponent from './DateTimePicker';

type BookingPanelProps = {
  businessId: string;
  show: boolean;
  onClose: () => void;
};

const BookingPanel = ({ businessId, show, onClose }: BookingPanelProps) => {
  if (!show) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>
        <DateTimePickerComponent businessId={businessId} />
      </div>
    </div>
  );
};

export default BookingPanel;
