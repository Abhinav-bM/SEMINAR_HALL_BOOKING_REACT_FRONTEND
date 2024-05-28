import React from "react";
import { Provider } from "react-redux";
import store from "./redux/Store/Store";
import SeminarHall from "./components/SeminarHall/SeminarHall.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup/Signup.jsx";
import Login from "./components/Login/Login.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" exact Component={SeminarHall} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
