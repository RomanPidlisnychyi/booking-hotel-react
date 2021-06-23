import { lazy } from 'react';

export const routes = [
  {
    path: '/',
    label: 'Home',
    exact: true,
    pablic: true,
    restricted: false,
    component: lazy(() =>
      import('./view/HomeView' /* webpackChunkName: "home-view" */)
    ),
  },
  {
    path: '/register',
    label: 'Register',
    exact: true,
    pablic: true,
    restricted: true,
    component: lazy(() =>
      import('./view/RegisterView' /* webpackChunkName: "register-view" */)
    ),
  },
  {
    path: '/login',
    label: 'Login',
    exact: true,
    pablic: true,
    restricted: true,
    component: lazy(() =>
      import('./view/LoginView' /* webpackChunkName: "login-view" */)
    ),
  },
  {
    path: '/booked',
    label: 'Booked',
    exact: true,
    pablic: false,
    restricted: true,
    component: lazy(() =>
        import('./view/BookedView' /* webpackChunkName: "booked-view" */)
    ),
  },
];
