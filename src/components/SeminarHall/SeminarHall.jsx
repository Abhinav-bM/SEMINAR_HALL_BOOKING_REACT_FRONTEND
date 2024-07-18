import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookSeat, saveState } from "../../redux/Reducer.js/Reducer";
import Modal from "../Modal/Modal";
import Seat from "../Seat/Seat";
import { format } from "date-fns";
import DatePicker from "../DatePicker/DatePicker";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const SeminarHall = () => {
  const date = format(new Date(), "yyyy-MM-dd");
  const dispatch = useDispatch();
  const seats = useSelector((state) => state.seats);
  const [selectedDate, setSelectedDate] = useState(date);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("jwt");
    if (token) {
      setAuthenticated(true);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    dispatch(saveState(seats));
  }, [seats]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSeatClick = (seatNumber) => {
    if (seats[selectedDate] && seats[selectedDate][seatNumber]) {
      return;
    }
    setSelectedSeat(seatNumber);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedSeat(null);
  };

  const handleModalSubmit = ({ name, phone }) => {
    dispatch(
      bookSeat({
        date: selectedDate,
        seatNumber: selectedSeat,
        name,
        phone,
      })
    );
    handleModalClose();
  };

  const logout = () => {
    Cookies.remove("jwt");
    navigate("/login");
  };

  return isAuthenticated ? (
    <div className="seminar-main-container">
      <h1 className="text-4xl font-bold my-8">Seminar Hall Booking</h1>

      <DatePicker onDateChange={handleDateChange} />

      <div className="seats">
        {(() => {
          const seatComponents = [];
          for (let i = 0; i < 30; i++) {
            seatComponents.push(
              <Seat
                key={i}
                number={i + 1}
                status={seats[selectedDate] && seats[selectedDate][i + 1]}
                onClick={handleSeatClick}
              />
            );
          }
          return seatComponents;
        })()}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
        seatNumber={selectedSeat}
        date={selectedDate}
      />

      <button
        type="button"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-10 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  ) : (
    <div>Loading ....</div>
  );
};

export default SeminarHall;
