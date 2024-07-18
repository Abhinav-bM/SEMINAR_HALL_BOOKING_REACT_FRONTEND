import axios from "axios";

const instance = axios.create({
  baseURL: "https://seminar-hall-booking-react-backend.vercel.app",
  withCredentials: true,
});

export default instance;
