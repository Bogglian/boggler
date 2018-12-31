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
  onSubmit,
  onChangeInput,
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
            placeholder="Leave a comment"
            onChange={onChangeInput}
          />
        </SpeechInputForm>
        <EditorBtn className="save-btn" onClick={onSubmit}>
          Save
        </EditorBtn>
      </EditorLayout>
    </ShadowedBox>
  );
};

export { Editor };
