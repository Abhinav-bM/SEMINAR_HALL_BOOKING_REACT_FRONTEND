import React, { useState } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (date) => {
    setSelectedDate(date);
    onDateChange(format(date, "yyyy-MM-dd"));
  };

  return (
    <DatePicker
      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
      selected={selectedDate}
      onChange={handleChange}
      minDate={new Date()}
    />
  );
};

export default CustomDatePicker;
