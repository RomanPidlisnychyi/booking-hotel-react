import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from './common/Routes';
import { Layout, Container } from './Layout';
import { Header } from './Header';
import { Nav } from './Nav';
import { routes } from '../routes';
import { onCurrent } from '../store/operations/authOperations';
import { onGetRooms } from '../store/operations/orderOperations';
import { getName } from '../store/selectors/authSelectors';
import { token } from '../utils/apiUtils';

export default function App() {
  const dispatch = useDispatch();
  const name = useSelector(getName);
  const tokens = token.getLocalToken();

  useEffect(() => {
    dispatch(onGetRooms());
  }, []);

  useEffect(() => {
    if (!name && tokens) {
      dispatch(onCurrent(tokens));
    }
  }, [dispatch, name, tokens]);

  return (
    <Layout>
      <Header />
      <Container>
        <Nav />
        <Suspense fallback={false}>
          <Switch>
            {routes.map(route =>
              route.pablic ? (
                <PublicRoute key={route.label} {...route} />
              ) : (
                <PrivateRoute key={route.label} {...route} />
              )
            )}
          </Switch>
        </Suspense>
      </Container>
    </Layout>
  );
}
