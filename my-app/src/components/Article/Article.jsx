import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { IconContext } from "react-icons";
import { StyledArticle } from "./StyledArticle";
import "../../fonts/fonts.css";

function Article({ title, text, img, charity }) {
  return (
    <StyledArticle>
      <div className="container">
        <div className="white-article">
          <h5>{title}</h5>
          <div className="article-text">
            {text.map((t) => (
              <p>{t}</p>
            ))}
            {charity && <a href="https://zrzutka.pl/v82k8k">Link do zrzutki</a>}

            <div className="photos">
              {img?.map((i) => (
                <img src={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </StyledArticle>
  );
}
export default Article;
