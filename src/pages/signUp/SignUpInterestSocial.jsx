import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import NextIcon from "@mui/icons-material/ArrowForward";
import "../styles/location.css";
import { Chip, styled } from "@mui/material";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
  marginLeft: 0,
}));

const SignUpInterestSocial = () => {
  const [chipData, setChipData] = useState([
    { key: 0, label: "Food" },
    { key: 1, label: "International Food" },
    { key: 2, label: "Local Food" },
    { key: 3, label: "Pizza" },
    { key: 4, label: "Burger" },
    { key: 5, label: "Lazagna" },
    { key: 6, label: "Sandwich" },
    { key: 7, label: "Events" },
    { key: 8, label: "Music Festival" },
  ]);
  const [selectedChip, setSelectedChip] = useState([]);

  const handleOnClick = (chip) => {
    if (selectedChip.includes(chip.key)) {
      const newChipItems = selectedChip.filter(
        (chipKey) => chipKey !== chip.key
      );
      return setSelectedChip(newChipItems);
    }
    setSelectedChip([...selectedChip, chip.key]);
  };

  const getSelected = (chip) => {
    return selectedChip.includes(chip.key);
  };

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
      <div className="interest-social">
        <div className="interest-social__header">
          <h3 className="interest-social__text">Interest</h3>
          <h6 className="interest-social__text--secondary">Social</h6>
        </div>
        <hr className="interest-social__hr" />
        <div className="interest-social__interests">
          {chipData.map((data) => {
            return (
              <ListItem key={data.key}>
                <Chip
                  label={data.label}
                  variant={getSelected(data) ? "contained" : "outlined"}
                  style={{
                    backgroundColor: getSelected(data) ? "#2c8cf5" : "white",
                    color: getSelected(data) ? "white" : "black",
                  }}
                  onClick={() => handleOnClick(data)}
                />
              </ListItem>
            );
          })}
        </div>
      </div>
      <div className="next_icon_container">
        <Link to="/signup/interest/work">
          <NextIcon className="next_icon" />
        </Link>
      </div>
    </div>
  );
};

export default SignUpInterestSocial;
