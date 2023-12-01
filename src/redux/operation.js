import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://voronrentrest.onrender.com';

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
      console.log('🚀 ~ file: operation.js:25 ~ res:', res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
