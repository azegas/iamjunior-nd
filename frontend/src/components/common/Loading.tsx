import '@/styles/global.scss';
import Spinner from '@/components/common/Spinner';

const Loading = () => {
  return (
    <div className="center">
      <Spinner />
    </div>
  );
};

export default Loading;
