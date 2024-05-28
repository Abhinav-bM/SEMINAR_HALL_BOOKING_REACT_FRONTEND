import { createSlice } from "@reduxjs/toolkit";
import { loadState} from "../localStorage/LocalStorage";

const initialState = [loadState()] || [{}];

console.log("Initial state : ", initialState);

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
    },
    setSeats: (state, action) => {
      return action.payload;
    },
    
  },
});

export const { bookSeat, setSeats } = seatsSlice.actions;

export default seatsSlice.reducer;
