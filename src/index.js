import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Nopage from "./pages/Nopage";
import SignUpInfo from "./pages/signUp/SignUpInfo.jsx";
import SignUpLocation from "./pages/signUp/SignUpLocation";
import SignUpEducation from "./pages/signUp/SignUpEducation";
import SignUpExperience from "./pages/signUp/SignUpExperience";
import SignUpCategory from "./pages/signUp/SignUpCategory";
import GuestCategory from "./pages/guest/GuestCategory";
import SignUpOccupation from "./pages/signUp/SignUpOccupation";
import SignUpInterestWork from "./pages/signUp/SignUpInterestWork";
import SignUpInterest from "./pages/signUp/SignUpInterest";
import SignUpInterestSocial from "./pages/signUp/SignUpInterestSocial";
import SignUpInterestSocialBoth from "./pages/signUp/SignUpInterestSocialBoth";
import GuestSocial from "./pages/guest/GuestSocial";
import GuestWork from "./pages/guest/GuestWork";
import Guest from "./pages/guest/Guest";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/guest" element={<Guest />} />
      <Route path="/guest/social" element={<GuestSocial />} />
      <Route path="/guest/work" element={<GuestWork />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup/info" element={<SignUpInfo />} />
      <Route path="/signup/occupation" element={<SignUpOccupation />} />
      <Route path="/signup/location" element={<SignUpLocation />} />
      <Route path="/signup/education" element={<SignUpEducation />} />
      <Route path="/signup/experience" element={<SignUpExperience />} />
      <Route path="/signup/category" element={<SignUpCategory />} />
      <Route path="/guest/category" element={<GuestCategory />} />
      <Route path="/signup/interest" element={<SignUpInterest />} />
      <Route path="/signup/interest/work" element={<SignUpInterestWork />} />
      <Route path="/signup/interest/social" element={<SignUpInterestSocial />}/>
      <Route path="/signup/interest/social/both" element={<SignUpInterestSocialBoth />}/>
      <Route path="*" element={<Nopage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
