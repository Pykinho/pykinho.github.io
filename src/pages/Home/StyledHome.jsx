import { styled } from "styled-components";
import wwa from "../../assets/wwa4.png";

export const StyledHome = styled.div`
  .home {
    height: calc(100vh - 160px - 95px);
    margin-top: 60px;
    background-image: url(${wwa});
    background-size: cover;
    min-height: 250px;
  }
  .boxes {
    margin-top: 80px;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
  h1 {
    font: 52px/52px "Hurme Geometric Sans 4 SemiBold";
    margin: 0;
    padding: 20px 0;
    color: #ffffff;
    text-shadow: 0px 0px 12px #000000;
  }
  .home-m {
    height: calc(100vh - 90px - 71px);
    margin-top: 60px;
    background-image: url(${wwa});
    background-size: cover;
  }
  .boxes-m {
    width: 100%;
    margin-left: 5px;
    margin-right: auto;
    h1 {
      font: 32px "Hurme Geometric Sans 4 SemiBold";
      margin: 0;
      padding-top: 420px;
      color: #ffffff;
      text-shadow: 0px 0px 12px #000000;
    }
  }
`;
