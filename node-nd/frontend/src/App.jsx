import { RouterProvider } from 'react-router-dom';
import router from '@/routing/router';
import '@/styles/reset.css'; // must be imported first, before other styles
import '@/styles/global.scss';
import { UserProvider } from '@/context/UserContext';
import { FavoriteProvider } from '@/context/FavoriteContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <UserProvider>
      <FavoriteProvider>
        <RouterProvider router={router} />
        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          // closeOnClick
          rtl={false}
          // pauseOnFocusLoss
          // draggable
          // pauseOnHover
          theme="light"
        />
      </FavoriteProvider>
    </UserProvider>
  );
};

export default App;
