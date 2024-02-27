import { StyledHell } from "./StyledHell";
import p3 from "../../assets/p3.jpeg";
import p1 from "../../assets/p1.jpeg";
import p2 from "../../assets/p2.jpeg";
import p4 from "../../assets/p4.jpeg";
import p5 from "../../assets/p5.jpeg";
import p6 from "../../assets/p6.jpeg";
import p7 from "../../assets/p7.jpeg";
import p8 from "../../assets/p8.jpeg";
import p9 from "../../assets/p9.jpeg";
import p10 from "../../assets/p10.jpeg";
import p11 from "../../assets/p11.jpeg";
import p12 from "../../assets/p12.jpeg";
import p13 from "../../assets/p13.jpeg";
import p14 from "../../assets/p14.jpeg";
import p15 from "../../assets/p15.jpeg";

import Box from "../../components/Boxes/Box";
import Footer from "../../components/Footer/Footer";
import Grid from "@mui/material/Grid";
import Article from "../../components/Article/Article";

function Hell() {
  const itemData = [
    { img: p1, title: "p1", author: "dupa", cols: 1, rows: 4 },
    { img: p2, title: "p2", author: "dupa", cols: 1, rows: 4 },
    { img: p3, title: "p3", author: "dupa", cols: 1, rows: 2 },
    { img: p4, title: "p4", author: "dupa", cols: 1, rows: 2 },
    { img: p5, title: "p5", author: "dupa", cols: 1, rows: 2 },
    { img: p6, title: "p6", author: "dupa", cols: 1, rows: 2 },

    { img: p12, title: "p12", author: "dupa", cols: 1, rows: 1 },
    { img: p13, title: "p13", author: "dupa", cols: 1, rows: 2 },
    { img: p7, title: "p7", author: "dupa", cols: 1, rows: 1 },
    { img: p15, title: "p15", author: "dupa", cols: 1, rows: 1 },
    { img: p14, title: "p14", author: "dupa", cols: 1, rows: 1 },

    { img: p9, title: "p9", author: "dupa", cols: 1, rows: 1 },

    { img: p10, title: "p10", author: "dupa", cols: 1, rows: 1 },
    { img: p11, title: "p11", author: "dupa", cols: 1, rows: 1 },
    { img: p8, title: "p8", author: "dupa", cols: 1, rows: 1 },
  ];
  return (
    <StyledHell>
      <div className="home">
        <div className="article">
          <h1>Piekło Gacka</h1>
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
                title={
                  "Jak tam gacek punkciki??? Dalej zliczasz ćwiartki za przypadkowy kontakt wzrokowy?? Nawet trochę mi cię żal XDDDDD"
                }
                itemData={itemData}
                address="/"
                list={true}
              />
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </StyledHell>
  );
}

export default Hell;
