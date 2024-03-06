import { styled } from "styled-components";
import "../../fonts/fonts.css";

export const StyledBox = styled.div`
  h5 {
    font: bold 16px "Hurme Geometric Sans 4 SemiBold";
    margin: 0 0 10px 0;
    color: #000000;
  }
  .container {
    background: white;
    height: 170px;
    width: 20rem;
  }
  .white-box {
    width: 100%;
    height: 100%;

    padding: 12px;
    text-align: justify;
    background: #ffffff top repeat-x;
    padding-bottom: 19px;
  }
  .box-image {
    width: 60px;
    height: 60px;
    margin: 0 10px 10px 0;
    text-align: center;
    float: left;
  }
  img {
    max-width: 60px;
    max-height: 60px;
    margin: 0 auto;
  }

  .box-text {
    height: 82px;
    font: 12px "Hurme Geometric Sans 4 SemiBold";

    color: #5a5a5a;
    text-align: left;
    p {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      margin: 0 0 15px;
    }
  }

  .fright {
    float: right;
  }
  .blue-btn {
    display: block;
    width: 95px;
    height: 28px;
    padding: 8px 0;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
    background: #13cfb7;
    border-radius: 15px;
    margin-bottom: 5px;
    text-transform: uppercase;
    font: bold 12px "Hurme Geometric Sans 4 SemiBold";
  }
  a:-webkit-any-link {
    cursor: pointer;
  }
  height: 100%;

  .container-m {
    background: white;
    height: 90px;
    width: 120px;
  }
  .white-box-m {
    width: 100%;
    height: 75%;

    padding: 6px;
    text-align: justify;
    background: #ffffff top repeat-x;
    padding-bottom: 6px;

    h5 {
      font: bold 8px "Hurme Geometric Sans 4 SemiBold";
      margin: 0 0 10px 0;
      color: #000000;
    }
  }
  .box-image-m {
    width: 1px;
    height: 1px;
    margin: 0px 20px 40px 0;
    text-align: center;
    float: left;
    img {
      max-width: 15px;
      max-height: 15px;
    }
  }
  .box-text-m {
    font: 6px "Hurme Geometric Sans 4 SemiBold";

    color: #5a5a5a;
    text-align: left;
    p {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      margin: 0 0 10px;
    }
  }
  .fright {
    float: right;
    margin-right: 6px;
  }
  .blue-btn-m {
    display: block;
    width: 40px;
    height: 10px;
    padding-top: 5px;
    padding-bottom: 10px;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
    background: #13cfb7;
    border-radius: 10px;
    margin-bottom: 10px;
    text-transform: uppercase;
    font: 6px "Hurme Geometric Sans 4 SemiBold";
  }
`;
