import { styled } from "styled-components";
import "../../fonts/fonts.css";

export const StyledNavBar = styled.div`
  .navbar {
    background-color: #13cfb7;
    height: 60px;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    margin-top: 100px;
    z-index: 999;
  }
  .row {
    display: block;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }

  .navbar a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
  }

  .navbar a:hover {
    color: black;
  }

  .main {
    margin-top: 30px; /* Add a top margin to avoid content overlay */
  }
  .menu-bars {
    margin-left: 2rem;
    margin-right: 2rem;
    font-size: 2rem;
    background: none;
  }

  .nav-text {
    text-transform: uppercase;
    position: relative;
    font-family: "Hurme Geometric Sans 4";
    text-align: center;
    display: inline-block;
    padding: 10px 21px;

    padding-top: 11px;
    margin-bottom: -9px;
  }

  .nav-text a:hover {
    color: black;
  }

  .wrapper {
    text-align: center;
  }
  .wrapper ul {
    display: inline-block;
    margin: 0;
    padding: 0;
    /* For IE, the outcast */
    zoom: 1;
    *display: inline;
  }
  .wrapper li {
    float: left;
  }

  .navbar-m {
    background-color: #13cfb7;
    height: 35px;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    margin-top: 60px;
    z-index: 999;
  }
  .row-m {
    display: block;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .navbar-m a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    text-decoration: none;
    font-size: 6px;
  }

  .navbar-m a:hover {
    color: black;
  }
  .nav-text-m {
    text-transform: uppercase;
    position: relative;
    font-family: "Hurme Geometric Sans 4";
    text-align: center;
    display: inline-block;
    padding: 10px 5px;

    padding-top: 11px;
    margin-bottom: -9px;
  }
`;
