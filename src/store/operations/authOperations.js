import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  currentRequest,
  currentSuccess,
  currentError,
  logoutSuccess,
  setMessage,
  cleanMessage,
} from '../actions/authActions';
import { token, register, login, current } from '../../utils/apiUtils';

export const onRegister = credentials => async dispatch => {
  console.log('credentials', credentials);
  dispatch(registerRequest());

  const payload = await register(credentials);
  if (payload.status < 400) {
    dispatch(registerSuccess());
    dispatch(setMessage('Registration was successfully'));
    dispatch(onCleanMessage());
    return 'It is okay';
  }

  dispatch(registerError(payload));
  dispatch(onCleanMessage());
};

export const onLogin = credentials => async dispatch => {
  dispatch(loginRequest());
  const payload = await login(credentials);

  if (payload.status < 400) {
    const { token, ...rest } = payload.data;

    dispatch(loginSuccess(rest));
    return;
  }

  dispatch(loginError(payload));
  dispatch(onCleanMessage());
};

export const onLogout = () => dispatch => {
  token.unset();
  dispatch(logoutSuccess());
};

export const onCurrent = tokens => async dispatch => {
  dispatch(currentRequest());

  token.setToken(tokens);

  const payload = await current();

  if (payload.status < 400) {
    dispatch(currentSuccess(payload.data));
    return;
  }

  token.unset();
  dispatch(currentError(payload));
  dispatch(onCleanMessage());
};

export const onCleanMessage = () => dispatch => {
  setTimeout(() => {
    dispatch(cleanMessage());
  }, 2000);
};
