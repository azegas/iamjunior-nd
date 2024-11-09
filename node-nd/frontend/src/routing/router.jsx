// what is react router explained - https://www.youtube.com/watch?v=aZGzwEjZrXc&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=21&ab_channel=NetNinja

import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Search from '../pages/Search';
import Page404 from '../pages/404';
import Navbar from '../components/layout/NavBar';
import Dashboard from '../pages/Dashboard';
import BusinessDetail from '../components/business/BusinessDetail';
import Favorites from '../pages/Favorites';
import { Outlet } from 'react-router-dom';
import routes from './routes';

// Define the Root component
const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

// Define the routes
const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Root />,
    children: [
      { path: '', element: <Home /> },
      { path: routes.services, element: <Services /> },
      { path: routes.contact, element: <Contact /> },
      { path: routes.about, element: <About /> },
      { path: routes.login, element: <Login /> },
      { path: routes.register, element: <Register /> },
      { path: routes.search(':categoryName'), element: <Search /> },
      { path: routes.page404, element: <Page404 /> },
      { path: routes.business(':id'), element: <BusinessDetail /> },
      { path: routes.favorites, element: <Favorites /> },
      { path: routes.dashboard, element: <Dashboard /> },
    ],
  },
]);

export default router;
