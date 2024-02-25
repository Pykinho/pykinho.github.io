import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { Sidebar } from "./Sidebar";
// import "./Navbar.css";
import { IconContext } from "react-icons";
import { StyledNavBar } from "./StyledNavBar";

function NavBar() {
  return (
    <StyledNavBar>
      <div className="navbar">
        <div className="row">
          <nav>
            <div className="wrapper">
              <ul>
                <li className="nav-text">
                  <a href="/">
                    Bankowość <br />
                    Spermy
                  </a>
                </li>
                <li className="nav-text">
                  <a href="/">
                    Usługi <br /> cuckoldowe
                  </a>
                </li>
                <li className="nav-text">
                  <a href="/">
                    Zakolak <br /> indywidualny
                  </a>
                </li>
                <li className="nav-text">
                  <a href="/">
                    Nieosiągalne <br /> dupy z koźmina
                  </a>
                </li>
                <li className="nav-text">
                  <a href="/">
                    SIMP <br />
                    Consulting
                  </a>
                </li>
                <li className="nav-text">
                  <a href="/">
                    Relacje
                    <br /> Impotenckie
                  </a>
                </li>
                <li className="nav-text">
                  {/* <a href="/us">
                    Kontakt <br /> z nami
                  </a> */}
                  <Link to="/us">
                    Kontakt <br /> z nami
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </StyledNavBar>
  );
}
export default NavBar;
