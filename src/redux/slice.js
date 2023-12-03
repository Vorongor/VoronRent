import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCarData,
  fetchSearchData,
  logIn,
  logOut,
  register,
} from './operation';

const initialState = {
  carData: [],
  searchData: [],
  makes: [],
  prices: [],
  favoriteCars: [],
  user: {},
  token: '',
  maxSize: 12,
  startTime: '',
  finishTime: '',
  rentalCompany: null,
  isLoading: false,
  filter: '',
  error: null,
  isloggedIn: false,
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
      .addCase(fetchCarData.rejected, handleRejected)
      .addCase(fetchSearchData.pending, handlePending)
      .addCase(fetchSearchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.searchData = action.payload.data;
      })
      .addCase(fetchSearchData.rejected, handleRejected)
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isloggedIn = true;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isloggedIn = true;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isloggedIn = false;
      })
      .addCase(logOut.rejected, state => {
        state.isloggedIn = false;
      });
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
  togleLogin,
} = carSlice.actions;
