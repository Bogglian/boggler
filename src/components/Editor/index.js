import React from "react";
import {
  EditorLayout,
  EditorBtn,
  ShadowedBox,
  SpeechInputForm,
  SpeechInputMenuBox,
  TextMenuBtn
} from "../../styledComponents";

const Editor = ({
  title,
  content,
  onSubmit,
  onChangeInput,
  onChangeFile,
  onClickBold,
  onClickHeader,
  onClickItelic,
  onClickQuote
}) => {
  return (
    <ShadowedBox>
      <EditorLayout>
        <SpeechInputForm className="speech-editor-form-title">
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            onChange={onChangeInput}
          />
        </SpeechInputForm>
        <SpeechInputMenuBox>
          <TextMenuBtn onClickHeader={onClickHeader}>Header</TextMenuBtn>
          <TextMenuBtn onClickItelic={onClickItelic}>Itelic</TextMenuBtn>
          <TextMenuBtn onClickBold={onClickBold}>Bold</TextMenuBtn>
          <TextMenuBtn onClickQuote={onClickQuote}>Quote</TextMenuBtn>
        </SpeechInputMenuBox>
        <SpeechInputForm className="speech-editor-form-textarea">
          <textarea
            type="text"
            name="content"
            value={content}
            placeholder="Leave a comment"
            onChange={onChangeInput}
          />
          <input type="file" name="uploadFile" onChange={onChangeFile} />
        </SpeechInputForm>
        <EditorBtn className="save-btn" onClick={onSubmit}>
          Save
        </EditorBtn>
      </EditorLayout>
    </ShadowedBox>
  );
};

export { Editor };
