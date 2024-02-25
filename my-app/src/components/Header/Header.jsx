import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { Sidebar } from "./Sidebar";
// import "./Navbar.css";
import { IconContext } from "react-icons";
import { StyledHeader } from "./StyledHeader";
import "../../fonts/fonts.css";

function Header() {
  return (
    <StyledHeader>
      <div className="container">
        <div className="dupa">
          <a href="/" style={{ color: "#13CFB7" }}>
            Grupa ZAKOLAK
          </a>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <a
            href="https://twitter.com/kejvli/status/1759675537293709616?s=46&t=LZ_PvcC9XOYje4rka5jcEA"
            style={{ color: "#7d7d7d" }}
          >
            PL/EN
          </a>
        </div>
        <div className="header">
          <div className="logo">zakolak</div>
          <div className="buttons">
            <a
              href="https://online.ipopema.pl/creator"
              className="button"
              target="_blank"
            >
              Logowanie
            </a>
            <button className="button">Otwórz konto</button>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
}
export default Header;
