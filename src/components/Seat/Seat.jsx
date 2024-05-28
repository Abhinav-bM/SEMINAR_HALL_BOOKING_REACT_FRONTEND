import React from 'react';

const Seat = ({ number, status, onClick }) => {
  return (
    <div
      className={`seat ${status ? 'booked' : 'available'}`}
      onClick={() => onClick(number)}
    >
      {number}
    </div>
  );
};

export default Seat;
