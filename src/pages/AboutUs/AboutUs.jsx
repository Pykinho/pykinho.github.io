import { StyledAboutUs } from "./StyledAboutUs";
import MediaQuery from "react-responsive";
import wwa from "../../assets/wwa4.png";
import barti from "../../assets/barti.jpg";
import gacek from "../../assets/gacek.jpeg";
import kalemba from "../../assets/kalemba.jpg";
import Box from "../../components/Boxes/Box";
import Footer from "../../components/Footer/Footer";
import Grid from "@mui/material/Grid";
import Article from "../../components/Article/Article";

function AboutUs() {
  return (
    <>
      <MediaQuery query="(min-device-width: 1280px)">
        <StyledAboutUs>
          <div className="home">
            <div className="article">
              <h1>O nas</h1>
              <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                columns={9}
              >
                <Grid item xs={9}>
                  <Article
                    title={"Opis i misja fundacji"}
                    img={[barti, gacek, kalemba]}
                    address="/"
                    text={[
                      "Naszą misją jest niesienie pomocy łysiejącym i ograniczonym kognitywistycznie członkom społeczeństwa, którzy przez swoje ubytki genetyczne mają problemy z prawidłowym funkcjonowaniem w obrębie rasy ludzkiej.",
                      "Grupa ZAKOLAK - kompleksowość usług, jakość i doświadczenie.",
                      "W skład grupy wchodzą PRAWICZEK, CUCKOLD, ZAKOLAK, IMPOTENT i SIMP oraz Bartłomiej Zarębski wraz z Jakubem Kalembą",
                      "Zapraszamy do wsparcia nas w naszej pracy",
                    ]}
                    charity={true}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
          <Footer />
        </StyledAboutUs>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1280px)">
        <StyledAboutUs>
          <div className="home-m">
            <div className="article-m">
              <h1>O nas</h1>
              <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                columns={9}
              >
                <Grid item xs={9}>
                  <Article
                    title={"Opis i misja fundacji"}
                    img={[barti, gacek, kalemba]}
                    address="/"
                    text={[
                      "Naszą misją jest niesienie pomocy łysiejącym i ograniczonym kognitywistycznie członkom społeczeństwa, którzy przez swoje ubytki genetyczne mają problemy z prawidłowym funkcjonowaniem w obrębie rasy ludzkiej.",
                      "Grupa ZAKOLAK - kompleksowość usług, jakość i doświadczenie.",
                      "W skład grupy wchodzą PRAWICZEK, CUCKOLD, ZAKOLAK, IMPOTENT i SIMP oraz Bartłomiej Zarębski wraz z Jakubem Kalembą",
                      "Zapraszamy do wsparcia nas w naszej pracy",
                    ]}
                    charity={true}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
          <Footer />
        </StyledAboutUs>
      </MediaQuery>
    </>
  );
}

export default AboutUs;
