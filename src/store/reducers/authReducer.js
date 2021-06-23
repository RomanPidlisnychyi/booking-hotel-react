import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  registerError,
  loginError,
  setMessage,
  cleanMessage,
  currentSuccess,
  currentError,
} from '../actions/authActions';


const initialUserState = {
  name: null,
  email: null,
};

const user = createReducer(initialUserState, {
  [loginSuccess]: (_, { payload }) => payload,
  [currentSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => initialUserState,
});

const message = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [registerSuccess]: () => null,
  [currentError]: (_, { payload }) => payload,
  [currentSuccess]: () => null,
  [loginError]: (_, { payload }) => payload,
  [loginSuccess]: () => null,
  [setMessage]: (_, { payload }) => payload,
  [cleanMessage]: () => null,
});

export default combineReducers({
  user,
  message,
});
