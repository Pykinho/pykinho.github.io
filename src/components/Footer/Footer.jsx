import { StyledFooter } from "./StyledFooter";
import MediaQuery from "react-responsive";
import Grid from "@mui/material/Grid";
import kuska from "../../assets/kuska.jpg";
import simp from "../../assets/simp.WEBP";
import legia from "../../assets/legia.png";
import turcja from "../../assets/turcja.jpg";

function Footer() {
  return (
    <>
      <MediaQuery query="(min-device-width: 1280px)">
        <StyledFooter>
          <div className="container">
            <div className="footer">
              <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="center"
                alignItems="center"
                columns={10}
              >
                <Grid item xs={5}>
                  <a href="https://www.instagram.com/malgosiarocka/">
                    <img src={legia}></img>
                  </a>
                  <a href="https://www.instagram.com/mariaderc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <img src={kuska}></img>
                  </a>
                  <a href="https://maps.app.goo.gl/rr6yuYgeaZKjUhz69">
                    <img src={simp}></img>
                  </a>
                  <a href="https://vm.tiktok.com/ZGeAuRTU8/">
                    <img src={turcja}></img>
                  </a>
                </Grid>
                <Grid item xs={5}>
                  <p>
                    Grupa ZAKOLAK skupia łysiejących cuckoldów i prawiczków bez
                    środków własnych na przeszczep włosów w Turcji
                    specjalizujących się w byciu cringowymi pizdusiami z
                    chujowym podrywem.
                  </p>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="black-footer">
            <Grid
              container
              spacing={0}
              direction="row"
              justifyContent="center"
              alignItems="center"
              columns={10}
            >
              <Grid item xs={5}>
                <p>Copyright 2024 ZAKOLAK INC All rights reserved.</p>
              </Grid>
              <Grid item xs={5}>
                <p>
                  Projekt funkcjonalny: Krzysztof Rocki
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Projekt
                  graficzny: Michał Świątczak
                </p>
              </Grid>
            </Grid>
          </div>
        </StyledFooter>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1280px)">
        <StyledFooter>
          <div className="container-m">
            <div className="footer-m">
              <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="center"
                alignItems="center"
                columns={10}
              >
                <Grid item xs={5} justifyContent={"start"}>
                  <a href="https://www.instagram.com/malgosiarocka/">
                    <img src={legia}></img>
                  </a>
                  <a href="https://www.instagram.com/mariaderc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <img src={kuska}></img>
                  </a>
                  <a href="https://maps.app.goo.gl/rr6yuYgeaZKjUhz69">
                    <img src={simp}></img>
                  </a>
                  <a href="https://vm.tiktok.com/ZGeAuRTU8/">
                    <img src={turcja} width={"60px"}></img>
                  </a>
                </Grid>
                <Grid item xs={5}>
                  <p>
                    Grupa ZAKOLAK skupia łysiejących cuckoldów i prawiczków bez
                    środków własnych na przeszczep włosów w Turcji
                    specjalizujących się w byciu cringowymi pizdusiami z
                    chujowym podrywem.
                  </p>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="black-footer-m">
            <Grid
              container
              spacing={0}
              direction="row"
              justifyContent="center"
              alignItems="center"
              columns={10}
            >
              <Grid item xs={4}>
                <p>Copyright 2024 ZAKOLAK INC All rights reserved.</p>
              </Grid>
              <Grid item xs={6}>
                <p>
                  Projekt funkcjonalny: Krzysztof Rocki
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  Projekt graficzny: Michał Świątczak
                </p>
              </Grid>
            </Grid>
          </div>
        </StyledFooter>
      </MediaQuery>
    </>
  );
}
export default Footer;
