import React from "react";
import {Link} from "react-router-dom";
import Header from "../../components/Header";
import NextIcon from "@mui/icons-material/ArrowForward";
import AddCircle from "@mui/icons-material/AddCircle";
import "../styles/signup_experience.css";

const SignUpExperience = () => {
    return (
        <div className="signup-experience">
            <div
                className="header"
                style={{boxShadow: "0 0 3px rgba(0, 0, 0, 0.25)"}}
            >
                <Header/>
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
            <div className="signup_experience">
                <div className="exp_title">Experience</div>

                <div className="exp_input_container">
                    <input className="exp_name_input" type="text" placeholder={"Workplace"}/>

                    <div className="exp_start">
                        <input className="exp_start_date exp_mini_date_input" type="text" placeholder={"DD"}/>
                        <input className="exp_start_month exp_mini_date_input" type="text" placeholder={"MM"}/>
                        <input className="exp_start_year exp_mini_date_input" type="text" placeholder={"YYYY"}/>
                    </div>

                    <div className="exp_finish">
                        <input className="exp_finish_date exp_mini_date_input" type="text" placeholder={"DD"}/>
                        <input className="exp_finish_month exp_mini_date_input" type="text" placeholder={"MM"}/>
                        <input className="exp_finish_year exp_mini_date_input" type="text" placeholder={"YYYY"}/>
                    </div>
                </div>

                <div className="exp_add">
                    <AddCircle className="exp_add_btn"/>
                </div>
            </div>
            <div className="next_icon_container">
                <Link to="">
                    <NextIcon className="next_icon"/>
                </Link>
            </div>
        </div>
    );
};

export default SignUpExperience;
