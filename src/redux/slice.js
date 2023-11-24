import { createSlice } from "@reduxjs/toolkit";
import { fetchCarData } from "./operation";

const initialState = {
  carData: [],
  error: null,
  isLoading: false,
  filter: "",
  //   filtredCarData: [],
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const carSlice = createSlice({
  name: "car",
  initialState,

  reducers: {
    filterCars(state, action) {
      state.filter = action.payload;
    },
    clearFilter(state) {
      state.filter = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCarData.pending, handlePending)
      .addCase(fetchCarData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.carData = action.payload;
      })
      .addCase(fetchCarData.rejected, handleRejected);
  },
});

export const carReduser = carSlice.reducer;
export const { filterCars, clearFilter } = carSlice.actions;
