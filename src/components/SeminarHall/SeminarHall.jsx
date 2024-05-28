import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeats, bookSeatAction } from "../../redux/Actions/Actions";
import Modal from "../Modal/Modal";
import Seat from "../Seat/Seat";
import DatePicker from "../DatePicker/DatePicker";
import { saveState } from "../../redux/localStorage/LocalStorage";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'

const SeminarHall = () => {
  const dispatch = useDispatch();
  const seats = useSelector((state) => state.seats);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate()

  useEffect(()=>{

    const token = Cookies.get('jwt')
    console.log('cookes accessing from frontend : ', token)
    if(!token){
      navigate("/login")
    }
  },[navigate])

  useEffect(() => {
    dispatch(fetchSeats());
  }, [dispatch]);

  useEffect(() => {
    saveState(seats);
  }, [seats]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSeatClick = (seatNumber) => {
    setSelectedSeat(seatNumber);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedSeat(null);
  };

  const handleModalSubmit = ({ name, phone }) => {
    dispatch(
      bookSeatAction({
        date: selectedDate,
        seatNumber: selectedSeat,
        name,
        phone,
      })
    );
    handleModalClose();
  };

  return (
    <div className="seminar-main-container">
      <h1 className="text-2xl my-4">Seminar Hall Booking</h1>

      <DatePicker onDateChange={handleDateChange} />

      <div className="seats">
        {Array.from({ length: 30 }, (_, i) => (
          <Seat
            key={i}
            number={i + 1}
            status={seats[selectedDate] && seats[selectedDate][i + 1]}
            onClick={handleSeatClick}
          />
        ))}
      </div>
      
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
        seatNumber={selectedSeat}
        date={selectedDate}
      />
    </div>
  );
};

export default SeminarHall;
