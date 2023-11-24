import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64f0ac898a8b66ecf779ffcc.mockapi.io/";

export const fetchCarData = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/car_rental");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
