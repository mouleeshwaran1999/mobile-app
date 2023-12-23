import React from "react";
import "../../Common.css";
import "./Welcome.css";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div className="profile">
      <h1 style={{ color: "white" }}>Welcome </h1>

      <Link className="button_common" to="/Login">
        Sign In
      </Link>
      <Link className="button_common" to="/Register">
        Register
      </Link>
    </div>
  );
};
export default Welcome;
