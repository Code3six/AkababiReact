import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import NextIcon from "@mui/icons-material/ArrowForward";
import "../styles/location.css";

const SignUpLocation = () => {
  return (
    <div className="signup-location">
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
        <p>Location</p>
        <input type="text" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3283.891401663795!2d38.78619897820133!3d8.997153227833236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x209cbe597069517f!2zRWRuYSBNYWxsIC0g4Yqk4Yu14YqTIOGInuGIjQ!5e0!3m2!1sen!2suk!4v1648141410336!5m2!1sen!2suk"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="next_icon_container">
        <Link to="/signup/interest">
          <NextIcon className="next_icon" />
        </Link>
      </div>
    </div>
  );
};

export default SignUpLocation;
