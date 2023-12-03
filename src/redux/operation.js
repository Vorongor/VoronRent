import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://voronrentrest.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post('/auth/register', formData);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post('/auth/login', formData);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  const token = thunkAPI.getState().user.token;
  try {
    setAuthHeader(token);
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCarData = createAsyncThunk(
  'cars/fetchAll',
  async (page, thunkAPI) => {
    try {
      const res = await axios.get(`/car?page=${page}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchSearchData = createAsyncThunk(
  'search/FetchSearch',
  async (query, thunkAPI) => {
    try {
      const res = await axios.get('/car/search', { params: query });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addOrder = createAsyncThunk(
  '/car/order',
  async (order, thunkAPI) => {
    const token = thunkAPI.getState().user.token;
    try {
      setAuthHeader(token);
      const res = await axios.post('/car/order', order);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
