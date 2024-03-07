import * as React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { StyledNavBar } from "./StyledNavBar";

function NavBar() {
  return (
    <>
      <MediaQuery query="(min-device-width: 1280px)">
        <StyledNavBar>
          <div className="navbar">
            <div className="row">
              <nav>
                <div className="wrapper">
                  <ul>
                    <li className="nav-text">
                      <a
                        href="
https://youtu.be/-sA4shCUdCw?si=vBjHxcp2Td2pzGq2"
                      >
                        Bankowość <br />
                        Spermy
                      </a>
                    </li>
                    <li className="nav-text">
                      <a href="">
                        Usługi <br /> cuckoldowe
                      </a>
                    </li>
                    <li className="nav-text">
                      <a href="https://www.instagram.com/p/C39mRMptrD8/?hl=en">
                        Zakolak <br /> indywidualny
                      </a>
                    </li>
                    <li className="nav-text">
                      <a href="https://youtu.be/zzi1r32GFhw?si=Lxf9YokepcKmiQIJ">
                        Nieosiągalne <br /> dupy z koźmina
                      </a>
                    </li>
                    <li className="nav-text">
                      <a href="https://youtu.be/nhP1ydLnk6M?si=0O1cgpkQEnfDIANz">
                        SIMP <br />
                        Consulting
                      </a>
                    </li>
                    <li className="nav-text">
                      <a href="https://www.youtube.com/watch?v=3suB9y_KIXk&ab_channel=venditatiofag">
                        Relacje
                        <br /> Impotenckie
                      </a>
                    </li>
                    <li className="nav-text">
                      <Link to="/https://youtu.be/GgMZuEvNudk?si=oom43yC5ZYCHDZLp">
                        Kontakt <br /> z nami
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </StyledNavBar>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1280px)">
        <StyledNavBar>
          <div className="navbar-m">
            <div className="row-m">
              <nav>
                <div className="wrapper">
                  <ul>
                    <li className="nav-text-m">
                      <a href="https://youtu.be/-sA4shCUdCw?si=vBjHxcp2Td2pzGq2">
                        Bankowość <br />
                        Spermy
                      </a>
                    </li>
                    <li className="nav-text-m">
                      <a href="/">
                        Usługi <br /> cuckoldowe
                      </a>
                    </li>
                    <li className="nav-text-m">
                      <a href="https://www.instagram.com/p/C39mRMptrD8/?hl=en">
                        Zakolak <br /> indywidualny
                      </a>
                    </li>
                    <li className="nav-text-m">
                      <a href="https://youtu.be/zzi1r32GFhw?si=Lxf9YokepcKmiQIJ">
                        Nieosiągalne <br /> dupy z koźmina
                      </a>
                    </li>
                    <li className="nav-text-m">
                      <a href="https://youtu.be/nhP1ydLnk6M?si=0O1cgpkQEnfDIANz">
                        SIMP <br />
                        Consulting
                      </a>
                    </li>
                    <li className="nav-text-m">
                      <a href="https://www.youtube.com/watch?v=3suB9y_KIXk&ab_channel=venditatiofag">
                        Relacje
                        <br /> Impotenckie
                      </a>
                    </li>
                    <li className="nav-text-m">
                      <Link to="https://youtu.be/GgMZuEvNudk?si=oom43yC5ZYCHDZLp">
                        Kontakt <br /> z nami
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </StyledNavBar>
      </MediaQuery>
    </>
  );
}
export default NavBar;
