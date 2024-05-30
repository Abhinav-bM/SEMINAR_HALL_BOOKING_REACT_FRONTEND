
export const bookSeat = (seatData) => ({
  type: "seats/bookSeat",
  payload: seatData,
});

export const setSeats = (seats) => ({
  type: "seats/setSeats",
  payload: seats,
});

export const saveState = (state) => ({
  type: "seats/saveState",
  payload: state,
});