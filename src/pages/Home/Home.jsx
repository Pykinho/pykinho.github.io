import { StyledHome } from "./StyledHome";
import wwa from "../../assets/wwa4.png";
import box1 from "../../assets/pl.box_1.jpg";
import box2 from "../../assets/pl.box_2.jpg";
import Box from "../../components/Boxes/Box";
import Footer from "../../components/Footer/Footer";
import Grid from "@mui/material/Grid";

function Home() {
  return (
    <StyledHome>
      <div className="home">
        <div className="boxes">
          <h1>
            Grupa ZAKOLAK - <br /> kompleksowość usług, jakość i doświadczenie
          </h1>
          <Grid
            container
            spacing={0}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            columns={9}
          >
            <Grid item xs={3}>
              <Box
                title={"Grupa ZAKOLAK"}
                icon={box1}
                address="/us"
                text="W skład grupy wchodzą PRAWICZEK, CUCKOLD, ZAKOLAK, IMPOTENT i SIMP oraz Bartłomiej Zarębski wraz z Jakubem Kalembą"
              />
            </Grid>
            <Grid item xs={3}>
              <Box
                title={"Aktualności"}
                icon={box2}
                address="/news"
                text="Dotychczasowe dokonania ojca założyciela Piotra Rockiego"
              />
            </Grid>
            <Grid item xs={3}>
              <Box
                title={"Piekło Gacka"}
                address="/hell"
                text="gacek kurwo bita kliknij więcej"
              />
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </StyledHome>
  );
}

export default Home;
