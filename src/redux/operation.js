import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://voronrentrest.onrender.com';

export const fetchCarData = createAsyncThunk(
  'cars/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/car');
      console.log('🚀 ~ file: operation.js:11 ~ res:', res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
