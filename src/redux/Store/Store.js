import { configureStore } from '@reduxjs/toolkit';
import seatsReducer from '../Reducer.js/Reducer';

const store = configureStore({
  reducer: {
    seats: seatsReducer,
  },
});

export default store;
