import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import NextIcon from "@mui/icons-material/ArrowForward";
import "../styles/location.css";

const SignUpOccupation = () => {
  return (
    <div className="signUp-occupation">
      <div
        className="header"
        style={{ boxShadow: "0 0 3px rgba(0, 0, 0, 0.25)" }}
      >
        <Header />
        <div className="topbar">
          <Link to="/">
            <h2 className="highlighted">Sign Up</h2>
          </Link>
          <Link to="/guest">
            <h2>Guest</h2>
          </Link>
          <Link to="/signin">
            <h2>Login</h2>
          </Link>
        </div>
      </div>
      <div className="signup_location">
        <p>Occupation</p>
        <input type="text" />
      </div>
      <div className="next_icon_container">
        <Link to="/signup/education">
          <NextIcon className="next_icon" />
        </Link>
      </div>
    </div>
  );
};

export default SignUpOccupation;
