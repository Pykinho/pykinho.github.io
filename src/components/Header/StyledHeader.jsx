import { styled } from "styled-components";
import "../../fonts/fonts.css";

export const StyledHeader = styled.div`
  .container {
    position: relative;
    z-index: 999;
  }
  .header {
    height: 100px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
    margin-left: auto;
    margin-right: auto;
    width: 1000px;
  }
  .dupa {
    z-index: 999;
    height: 0px;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    a {
      font: 12px "Hurme Geometric Sans 4 SemiBold";
    }
    text-align: right;
  }
  .buttons {
    display: flex;
    margin-top: 10px;

    z-index: 999;
  }
  .logo {
    font-size: 40px;
    margin-top: 10px;
    font-weight: bold;
    font-family: "Comic Sans MS";
    z-index: 999;
    a {
      font-size: 40px;
      margin-top: 10px;
      font-weight: bold;
      font-family: "Comic Sans MS";
      z-index: 999;
    }
  }
  .button {
    border-radius: 17px;
    border: solid 3px #00cfb6;
    display: inline-block;
    width: 143px;
    height: 28px;
    line-height: 30px;
    text-align: center;
    color: #ffffff;
    text-transform: uppercase;
    max-width: 100%;
    text-decoration: none;
    float: right;
    margin-top: 16px;
    margin-left: 20px;
    background-color: black;
    font-size: 12px;
    font-weight: bold;
    padding-bottom: 28px;
    z-index: 999;
  }
  .button:hover {
    border: solid 3px white;
  }
  a:-webkit-any-link {
    cursor: pointer;
  }

  .container-m {
    position: relative;
    z-index: 999;
    height: 30px;
  }
  .header-m {
    height: 50px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  .dupa-m {
    z-index: 999;
    height: 0px;
    width: 100%;
    margin-left: auto;
    margin-right: 10px;
    a {
      font: 8px "Hurme Geometric Sans 4 SemiBold";
      margin-right: 10px;
    }
    text-align: right;
  }
  .logo-m {
    margin-left: 10px;
    font-size: 16px;
    margin-top: 30px;
    font-weight: bold;
    font-family: "Comic Sans MS";
    z-index: 999;
    a {
      margin-left: 10px;
      font-size: 16px;
      margin-top: 30px;
      font-weight: bold;
      font-family: "Comic Sans MS";
      z-index: 999;
    }
  }
  .buttons-m {
    display: flex;
    margin-top: 20px;
    margin-right: 10px;
    z-index: 999;
    .button {
      border-radius: 12px;
      border: solid 2px #00cfb6;
      width: 80px;
      height: 10px;
      line-height: 15px;
      text-align: center;
      color: #ffffff;
      text-transform: uppercase;
      max-width: 100%;
      text-decoration: none;
      float: right;
      margin-top: 10px;
      margin-left: 10px;
      background-color: black;
      font-size: 6px;
      font-weight: bold;
      z-index: 999;
      padding-bottom: 15px;
    }
  }
`;
