import React from "react";
import {Link} from "react-router-dom";
import Header from "../../components/Header";
import CategoryImageButtons from "../../components/SignUpComponent/CategoryImageButtons";
import "../styles/signup_category.css";

const SignUpCategory = () => {
    return (
        <div className="signup-category">
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
            <div className="signup_category">
                {/*<div className="cat_title">Category</div>*/}

                <div className="cat_input_container">
                    <CategoryImageButtons />
                </div>
            </div>
        </div>
    );
};

export default SignUpCategory;
