type Routes = {
  home: string;
  services: string;
  contact: string;
  about: string;
  login: string;
  register: string;
  categories: (categoryName: string) => string;
  business: (id: string) => string;
  favorites: string;
  dashboard: string;
  page404: string;
};

const routes: Routes = {
  home: '/',
  services: '/services',
  contact: '/contact',
  about: '/about',
  login: '/login',
  register: '/register',
  categories: (categoryName: string) => `/categories/${categoryName}`,
  business: (id: string) => `/business/details/${id}`,
  favorites: '/favorites',
  dashboard: '/dashboard',
  page404: '*',
};

export default routes;
