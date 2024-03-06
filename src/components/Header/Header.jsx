import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { Sidebar } from "./Sidebar";
// import "./Navbar.css";
import MediaQuery from "react-responsive";
import { IconContext } from "react-icons";
import { StyledHeader } from "./StyledHeader";
import "../../fonts/fonts.css";

function Header() {
  return (
    <>
      <MediaQuery query="(min-device-width: 1280px)">
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
              <div className="logo">
                <div className="logo">
                  <a
                    href="/"
                    style={{
                      color: "#f2f2f2",
                      textDecoration: "none",
                    }}
                  >
                    zakolak
                  </a>
                </div>
              </div>
              <div className="buttons">
                <a
                  href="https://youtu.be/tJF4QqnhCTA?si=S2100CoY11q-VSzZ"
                  className="button"
                  target="_blank"
                >
                  Logowanie
                </a>
                <a href="https://www.pornhub.com/signup" className="button">
                  Otwórz konto
                </a>
              </div>
            </div>
          </div>
        </StyledHeader>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1280px)">
        <StyledHeader>
          <div className="container-m">
            <div className="dupa-m">
              <a href="/" style={{ color: "#13CFB7" }}>
                Grupa ZAKOLAK
              </a>
              &emsp;&emsp;&emsp;&emsp;
              <a
                href="https://twitter.com/kejvli/status/1759675537293709616?s=46&t=LZ_PvcC9XOYje4rka5jcEA"
                style={{ color: "#7d7d7d" }}
              >
                PL/EN;
              </a>
              &emsp;&emsp;
            </div>
            <div className="header-m">
              <div className="logo-m">
                <a
                  href="/"
                  style={{
                    color: "#f2f2f2",
                    textDecoration: "none",
                  }}
                >
                  zakolak
                </a>
              </div>
              <div className="buttons-m">
                <a
                  href="https://youtu.be/tJF4QqnhCTA?si=S2100CoY11q-VSzZ"
                  className="button"
                >
                  Logowanie
                </a>
                <a href="https://www.pornhub.com/signup" className="button">
                  Otwórz konto
                </a>
              </div>
            </div>
          </div>
        </StyledHeader>
      </MediaQuery>
    </>
  );
}
export default Header;
