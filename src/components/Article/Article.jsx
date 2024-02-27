import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { StyledArticle } from "./StyledArticle";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import "../../fonts/fonts.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     overflow: "hidden",
//     backgroundColor: theme.palette.background.paper,
//   },
//   imageList: {
//     width: 500,
//     height: 450,
//   },
// }));
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
function Article({
  title,
  text,
  img,
  charity,
  imgClassName,
  list,
  itemData,
  news,
}) {
  // const classes = useStyles();
  return (
    <StyledArticle>
      <div className="container">
        <div className="white-article">
          <h5>{title}</h5>

          {news ? (
            <div className="news">
              <div className="news-text">
                {text?.map((t) => (
                  <p>{t}</p>
                ))}
              </div>

              <div className="zrzuta">
                <div className={imgClassName ? imgClassName : "photos-news"}>
                  {img?.map((i) => (
                    <img src={i} />
                  ))}
                </div>
                {charity && (
                  <a href="https://zrzutka.pl/v82k8k">Link do zrzutki</a>
                )}
              </div>
            </div>
          ) : !list ? (
            <div className="article-text">
              {text?.map((t) => (
                <p>{t}</p>
              ))}
              {charity && (
                <a href="https://zrzutka.pl/v82k8k">Link do zrzutki</a>
              )}

              <div className={imgClassName ? imgClassName : "photos"}>
                {img?.map((i) => (
                  <img src={i} />
                ))}
              </div>
            </div>
          ) : (
            <div className="dupsko">
              <a href="https://zrzutka.pl/v82k8k">Link do zrzutki</a>
              <ImageList className="dupa" variant="quilted" cols={6} gap={1}>
                {itemData.map((item) => (
                  <ImageListItem
                    key={item.img}
                    cols={item.cols || 1}
                    rows={item.rows || 1}
                  >
                    <img
                      {...srcset(item.img, 421, item.rows, item.cols)}
                      alt={item.title}
                      loading="lazy"
                      style={{ objectFit: "fill" }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
          )}

          {}
        </div>
      </div>
    </StyledArticle>
  );
}
export default Article;
