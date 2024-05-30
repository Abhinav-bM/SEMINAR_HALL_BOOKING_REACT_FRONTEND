import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const loadState = () => {
  try {
    const initilState = localStorage.getItem("seats");
    if (initilState === null) {
      return undefined;
    }

    return JSON.parse(initilState);
  } catch (err) {
    return undefined;
  }
};

const initialState = loadState() || {};

const seatsSlice = createSlice({
  name: 'seats',
  initialState,
  reducers: {
    bookSeat: (state, action) => {
      const { date, seatNumber, name, phone } = action.payload;
      if (!state[date]) {
        state[date] = {};
      }
      state[date][seatNumber] = { name, phone };
      toast.success("Seat booked successfully");
    },
    saveState: (state, action) => {
      try {
        const newState = JSON.stringify(state);
        localStorage.setItem("seats", newState);
      } catch (err) {
        console.error('Failed to save state:', err);
      }
    },
  },
});

export const { bookSeat, setSeats, saveState } = seatsSlice.actions;

export default seatsSlice.reducer;
