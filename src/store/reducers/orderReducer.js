import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  getRoomsSuccess,
  getOrdersByDateSuccess,
  getOrdersByUserSuccess,
  setOrderSuccess,
} from '../actions/orderActions';


const rooms = createReducer([], {
  [getRoomsSuccess]: (_, { payload }) => payload,
});

const dateOrders = createReducer([], {
  [getOrdersByDateSuccess]: (_, { payload }) => payload,
  [setOrderSuccess]: (state, { payload }) => [...state, payload],
});

const userOrders = createReducer([], {
  [getOrdersByUserSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
  rooms,
  dateOrders,
  userOrders,
});
