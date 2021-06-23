import {
  getRoomsRequest,
  getRoomsSuccess,
  getRoomsError,
  getOrdersByDateRequest,
  getOrdersByDateSuccess,
  getOrdersByDateError,
  getOrdersByUserRequest,
  getOrdersByUserSuccess,
  getOrdersByUserError,
  setOrderRequest,
  setOrderSuccess,
  setOrderError,
} from '../actions/orderActions';
import { onCleanMessage } from './authOperations';
import { rooms, ordersByDate, setOrder } from '../../utils/apiUtils';

export const onGetRooms = () => async dispatch => {
  dispatch(getRoomsRequest());

  const payload = await rooms();
  if (payload.status < 400) {
    dispatch(getRoomsSuccess(payload.data));
    return;
  }

  dispatch(getRoomsError(payload));
  dispatch(onCleanMessage());
};

export const onGetOrdersByDate = date => async dispatch => {
  dispatch(getOrdersByDateRequest());

  const payload = await ordersByDate(date);
  if (payload.status < 400) {
    dispatch(getOrdersByDateSuccess(payload.data));
    return;
  }

  dispatch(getOrdersByDateError(payload));
  dispatch(onCleanMessage());
};

export const onSetOrder = credentials => async dispatch => {
  dispatch(setOrderRequest());

  const payload = await setOrder(credentials);
  if (payload.status < 400) {
    dispatch(setOrderSuccess(payload.data));
    return;
  }

  dispatch(setOrderError(payload));
  dispatch(onCleanMessage());
};