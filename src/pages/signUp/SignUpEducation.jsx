import React from "react";
import {Link} from "react-router-dom";
import Header from "../../components/Header";
import NextIcon from "@mui/icons-material/ArrowForward";
import AddCircle from "@mui/icons-material/AddCircle";
import "../styles/signup_education.css";

const SignUpEducation = () => {
    return (
        <div className="signup-education">
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
            <div className="signup_education">
                <div className="edu_title">Education</div>

                <div className="edu_input_container">
                    <input className="edu_name_input" type="text" placeholder={"School/University"}/>

                    <div className="edu_start">
                        <input className="edu_start_date edu_mini_date_input" type="text" placeholder={"DD"}/>
                        <input className="edu_start_month edu_mini_date_input" type="text" placeholder={"MM"}/>
                        <input className="edu_start_year edu_mini_date_input" type="text" placeholder={"YYYY"}/>
                    </div>

                    <div className="edu_finish">
                        <input className="edu_finish_date edu_mini_date_input" type="text" placeholder={"DD"}/>
                        <input className="edu_finish_month edu_mini_date_input" type="text" placeholder={"MM"}/>
                        <input className="edu_finish_year edu_mini_date_input" type="text" placeholder={"YYYY"}/>
                    </div>
                </div>
                <div className="edu_add">
                    <AddCircle className="edu_add_btn"/>
                </div>
            </div>
            <div className="next_icon_container">
                <Link to="/signup/experience">
                    <NextIcon className="next_icon"/>
                </Link>
            </div>
        </div>
    );
};

export default SignUpEducation;
