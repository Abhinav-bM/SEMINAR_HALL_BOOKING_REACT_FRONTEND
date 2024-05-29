import { createSlice } from "@reduxjs/toolkit";
import { loadState} from "../localStorage/LocalStorage";
import{toast} from 'react-toastify'


const initialState = [loadState()] || [{}];

const seatsSlice = createSlice({
  name: "seats",
  initialState,
  reducers: {
    bookSeat: (state, action) => {
      const { date, seatNumber, name, phone } = action.payload;
      if (!state[date]) {
        state[date] = {};
      }
      state[date][seatNumber] = { name, phone };
      toast.success("Seat booked successfully")
    },
    setSeats: (state, action) => {
      return action.payload;
    },
    
  },
});

export const { bookSeat, setSeats } = seatsSlice.actions;

export default seatsSlice.reducer;
