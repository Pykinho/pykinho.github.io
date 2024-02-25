import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { IconContext } from "react-icons";
import { StyledBox } from "./StyledBox";
import "../../fonts/fonts.css";

function Box({ title, text, address, icon }) {
  return (
    <StyledBox>
      <div className="container">
        <div className="white-box">
          <h5>{title}</h5>
          <div className="box-image">{icon ? <img src={icon} /> : ""}</div>
          <div className="box-text">
            <p>{text}</p>
          </div>
          <a href={address} className="blue-btn fright">
            więcej »
          </a>
        </div>
      </div>
    </StyledBox>
  );
}
export default Box;
