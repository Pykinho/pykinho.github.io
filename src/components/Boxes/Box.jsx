import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { IconContext } from "react-icons";
import { StyledBox } from "./StyledBox";
import "../../fonts/fonts.css";

function Box({ title, text, address, icon }) {
  return (
    <>
      <MediaQuery query="(min-device-width: 1280px)">
        <StyledBox>
          <div className="container">
            <div className="white-box">
              <h5>{title}</h5>
              <div className="box-image">{icon ? <img src={icon} /> : ""}</div>
              <div className="box-text">
                <p>{text}</p>
              </div>
              <Link to={address} className="blue-btn fright">
                więcej »
              </Link>
            </div>
          </div>
        </StyledBox>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1280px)">
        <StyledBox>
          <div className="container-m">
            <div className="white-box-m">
              <h5>{title}</h5>
              <div className="box-image-m">
                {icon ? <img src={icon} /> : ""}
              </div>
              <div className="box-text-m">
                <p>{text}</p>
              </div>
            </div>
            <Link to={address} className="blue-btn-m fright">
              więcej »
            </Link>
          </div>
        </StyledBox>
      </MediaQuery>
    </>
  );
}
export default Box;
