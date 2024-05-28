import React, { useState } from "react";

const Modal = ({ isOpen, onClose, onSubmit, seatNumber, date }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, phone });
    setName("");
    setPhone("");
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="flex flex-row justify-between">
          <h2>
            Book Seat {seatNumber} on {date}
          </h2>
          <span className="" onClick={onClose}>
            <small>close</small>
          </span>
        </div>

        <form className="mt-5" onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            required
          />
          <button
            type="submit"
            className="bg-cyan-700 py-1 px-4 rounded-sm text-white"
          >
            Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
