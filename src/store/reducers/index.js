import { combineReducers } from 'redux';
import auth from './authReducer';
import order from './orderReducer';
import { loading } from './loadingReducer';

export default combineReducers({
  auth,
  order,
  loading,
});
