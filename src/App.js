import React from "react";
import "./App.css";
import Login from "./Component.js/Login/Login";
import Register from "./Component.js/Register/Register";
import Welcome from "./Component.js/Welcome/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component.js/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
