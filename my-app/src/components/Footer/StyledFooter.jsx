import { styled } from "styled-components";
import "../../fonts/fonts.css";

export const StyledFooter = styled.div`
  .container {
    background-color: white;
    padding-top: 10px;
    padding-bottom: 10px;
    z-index: 999;
    position: relative;
  }
  .footer {
    margin-left: auto;
    margin-right: auto;
    width: 1000px;
    p {
      font: bold "Hurme Geometric Sans 4 SemiBold";
      font-size: 12px;
      color: gray;
    }
  }
  .black-footer {
    padding-top: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 1000px;
    font: 12px "Hurme Geometric Sans 4 SemiBold";
    color: white;
    padding-bottom: 10px;
    z-index: 999;
    position: relative;
    background-color: black;
  }
  img {
    max-height: 40px;
    margin-right: 50px;
    opacity: 0.4;
  }
  img:hover {
    opacity: 1;
  }
`;
