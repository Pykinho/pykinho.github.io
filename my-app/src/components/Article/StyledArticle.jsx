import { styled } from "styled-components";
import "../../fonts/fonts.css";

export const StyledArticle = styled.div`
  h5 {
    font: bold 16px "Hurme Geometric Sans 4 SemiBold";
    margin: 0 0 10px 0;
    color: #000000;
  }
  .container {
    background: white;
    height: 50vh;
    width: 1000px;
  }
  .white-article {
    width: 100%;
    height: 100%;

    padding: 30px;
    text-align: justify;
    background: #ffffff top repeat-x;
    padding-bottom: 19px;
    border-bottom: 10px solid black;
  }
  .article-image {
    width: 60px;
    height: 60px;
    margin: 0 10px 10px 0;
    text-align: center;
    float: left;
  }
  .photos {
    display: flex;
    justify-content: center;
  }
  img {
    max-width: 150px;
    height: 18vh;
    min-height: 20px;
    margin: 0 20px;
  }

  .article-text {
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
  a {
    height: 82px;
    font: 12px "Hurme Geometric Sans 4 SemiBold";

    color: #5a5a5a;
    text-align: left;
  }
  a:-webkit-any-link {
    cursor: pointer;
  }

  height: 100%;
`;
