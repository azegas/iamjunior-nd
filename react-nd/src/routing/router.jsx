// what is react router explained - https://www.youtube.com/watch?v=aZGzwEjZrXc&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=21&ab_channel=NetNinja

import { createBrowserRouter } from "react-router-dom";
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
import { Outlet } from "react-router-dom";

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
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "search/:serviceName", element: <Search /> },
      { path: "*", element: <Page404 /> },
      { path: "business/:id", element: <BusinessDetail /> },
      { path: "favorites", element: <Favorites /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
]);

export default router;
