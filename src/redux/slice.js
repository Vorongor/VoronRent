import { createSlice } from '@reduxjs/toolkit';
import { fetchCarData } from './operation';

const initialState = {
  carData: [],
  makes: [],
  prices: [],
  favoriteCars: [],
  maxSize: 12,
  startTime: '',
  finishTime: '',
  rentalCompany: null,
  isLoading: false,
  filter: '',
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const carSlice = createSlice({
  name: 'car',
  initialState,

  reducers: {
    filterCars(state, action) {
      state.filter = action.payload;
    },
    clearFilter(state) {
      state.filter = '';
    },
    setFavorite(state, action) {
      state.favoriteCars = [...state.favoriteCars, action.payload];
    },
    removeFavorite(state, action) {
      state.favoriteCars = state.favoriteCars.filter(
        car => car !== action.payload
      );
    },
    setStart(state, action) {
      state.startTime = action.payload;
    },
    setFinish(state, action) {
      state.finishTime = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCarData.pending, handlePending)
      .addCase(fetchCarData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.carData = action.payload.data;
        state.maxSize = action.payload.maxSize;
        state.makes = action.payload.makes;
        state.prices = action.payload.prices;
        state.rentalCompany = action.payload.rentalCompany;
      })
      .addCase(fetchCarData.rejected, handleRejected);
  },
});

export const carReduser = carSlice.reducer;
export const {
  filterCars,
  clearFilter,
  setFavorite,
  removeFavorite,
  setStart,
  setFinish,
} = carSlice.actions;
