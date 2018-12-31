import React from "react";
import {
  ArticleLayout,
  EditorBtn,
  ShadowedBox,
  SpeechArticle
} from "../../styledComponents";

const Article = ({ title, content, onClickEdit }) => {
  return (
    <ShadowedBox>
      <ArticleLayout>
        <SpeechArticle className="article-title">
          <h2>{title}</h2>
        </SpeechArticle>
        <SpeechArticle className="article-content">
          <h3>{content}</h3>
        </SpeechArticle>
        <EditorBtn className="edit-btn" onClick={onClickEdit}>
          Edit
        </EditorBtn>
      </ArticleLayout>
    </ShadowedBox>
  );
};

export { Article };
