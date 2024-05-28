import { bookSeat, setSeats } from '../Reducer.js/Reducer';

export const bookSeatAction = (seatData) => async (dispatch) => {
  try {
    dispatch(bookSeat(seatData));
  } catch (error) {
    console.error('Failed to book seat:', error);
  }
};

export const fetchSeats = (date) => async (dispatch) => {
  try {
    const storedSeats = JSON.parse(localStorage.getItem('seats')) || {};
    dispatch(setSeats(storedSeats));
  } catch (error) {
    console.error('Failed to fetch seats:', error);
  }
};