import React from "react";
import {Link} from "react-router-dom";
import Header from "../../components/Header";
import CategoryImageButtons from "../../components/GuestComponent/CategoryImageButtons";
import "../styles/guest_category.css";

const GuestCategory = () => {
    return (
        <div className="guest-category">
            <div
                className="header"
                style={{boxShadow: "0 0 3px rgba(0, 0, 0, 0.25)"}}
            >
                <Header/>
                <div className="topbar">
                    <Link to="/">
                        <h2>Sign Up</h2>
                    </Link>
                    <Link to="/guest">
                        <h2 className="highlighted">Guest</h2>
                    </Link>
                    <Link to="/signin">
                        <h2>Login</h2>
                    </Link>
                </div>
            </div>
            <div className="guest_category">
                {/*<div className="cat_title">Category</div>*/}

                <div className="cat_input_container">
                    <CategoryImageButtons />
                </div>
            </div>
        </div>
    );
};

export default GuestCategory;
