import React from "react";
import {
  ArticleLayout,
  ShadowedBox,
  SpeechArticle
} from "../../styledComponents";

const Article = ({ title, content }) => {
  return (
    <ShadowedBox>
      <ArticleLayout>
        <SpeechArticle className="article-title">
          <h2>{title}</h2>
        </SpeechArticle>
        <SpeechArticle className="article-content">
          <h3>{content}</h3>
        </SpeechArticle>
      </ArticleLayout>
    </ShadowedBox>
  );
};

export { Article };
