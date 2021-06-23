import { createAction } from '@reduxjs/toolkit';

export const getRoomsRequest = createAction('GET_ROOMS_REQUEST');
export const getRoomsSuccess = createAction('GET_ROOMS_SUCCESS');
export const getRoomsError = createAction('GET_ROOMS_ERROR');

export const getOrdersByDateRequest = createAction('GET_ORDERS_BY_DATE_REQUEST');
export const getOrdersByDateSuccess = createAction('GET_ORDERS_BY_DATE_SUCCESS');
export const getOrdersByDateError = createAction('GET_ORDERS_BY_DATE_ERROR');

export const getOrdersByUserRequest = createAction('GET_ORDERS_BY_USER_REQUEST');
export const getOrdersByUserSuccess = createAction('GET_ORDERS_BY_USER_SUCCESS');
export const getOrdersByUserError = createAction('GET_ORDERS_BY_USER_ERROR');

export const setOrderRequest = createAction('SET_ORDER_REQUEST');
export const setOrderSuccess = createAction('SET_ORDER_SUCCESS');
export const setOrderError = createAction('SET_ORDER_ERROR');