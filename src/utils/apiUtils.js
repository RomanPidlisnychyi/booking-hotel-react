import axios from 'axios';

axios.defaults.baseURL = 'https://booking-hotel-room.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:3001';


export const token = {
  setToken(token) {

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    localStorage.setItem('bookingHotelToken', JSON.stringify(token));
  },
  getLocalToken() {
    const token = localStorage.getItem('bookingHotelToken');

    return token ? JSON.parse(token) : null;
  },
  unset() {
    localStorage.removeItem('bookingHotelToken');

    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = async credentials => {
  try {
    const response = await axios.post('/auth/register', credentials);

    return response;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Something wrong';
  }
};

export const login = async credentials => {
  try {
    const response = await axios.post('/auth/login', credentials);

    const { token: accessToken } = response.data;
    if(accessToken) {
      token.setToken(accessToken);
    }

    return response;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Something wrong';
  }
};

export const current = async () => {
  try {
    const response = await axios.get('/users/current');

    return response;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Something wrong';
  }
};

export const rooms = async () => {
  try {
    const response = await axios.get('/rooms');

    return response;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Something wrong';
  }
};

export const ordersByDate = async date => {
  try {
    const response = await axios.get(`/orders/${date}`);

    return response;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Something wrong';
  }
};

export const setOrder = async ({ date, roomId }) => {
  try {
    const response = await axios.post(`/orders/${roomId}`, { date });

    return response;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Something wrong';
  }
};