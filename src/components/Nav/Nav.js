import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import styles from './Nav.module.css';

export default function Nav() {
  const homeRoute = routes.find(route => route.path === '/') || '/';
  const bookedRoute = routes.find(route => route.path === '/booked')  || '/booked';
  return (
    <div>
      <div className={styles.container}>
        <Link to={homeRoute.path}>{homeRoute.label}</Link>
        <Link to={bookedRoute.path}>My orders</Link>
      </div>
    </div>
  );
}
