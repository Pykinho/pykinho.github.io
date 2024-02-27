import { StyledNews } from "./StyledNews";
import gacek from "../../assets/wwa4.png";
import barti from "../../assets/pl.box_1.jpg";
import pirat from "../../assets/pirat.jpg";
import Box from "../../components/Boxes/Box";
import Footer from "../../components/Footer/Footer";
import Grid from "@mui/material/Grid";
import Article from "../../components/Article/Article";

function News() {
  return (
    <StyledNews>
      <div className="home">
        <div className="article">
          <h1>Aktualności</h1>
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
                title={"Aktualności"}
                text={[
                  "09.01.1999",
                  "Narodziny małego zakolaka jebanego. W tamtym czasie nikt nawet nie przypuszczał jaką spierdoliną będzie w przyszłości.",
                  "11.11.2022",
                  "Wielka katastrofa i niepowodzenie. Bunt małego gacka, który odzwyczajony od aktywności seksualnej miał wyjebane na koleżankę M.",
                  "26.05.2023",
                  "Wygrana walka z mini netoperkiem. Piętnaście tabletek braveran zrobiło robotę i cuckold wreszcie mógł spuścić ciśnienie. Chodzą słuchy, że na koniec wieczoru spierdalał przed jednookim piratem.",
                  "08.03.2024",
                  "Śmierć nietoperza w ringu podczas walki z Mikołajem T. w wyniku ciosu w zakola. Po stwierdzonym zgonie uczestnicy wydarzenia zamówili śmieciarkę, która wywiozła truchło na wysypisko Nam Son w Hanoi.",
                ]}
                img={[pirat]}
                charity={true}
                news={true}
              />
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </StyledNews>
  );
}

export default News;
