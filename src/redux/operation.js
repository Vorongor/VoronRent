import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://voronrentrest.onrender.com';

export const fetchCarData = createAsyncThunk(
  'cars/fetchAll',
  async (page, thunkAPI) => {
    try {
      const res = await axios.get(`/car?page=${page}`);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
