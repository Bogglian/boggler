import React from "react";
import {
  EditorLayout,
  EditorBtn,
  ShadowedBox,
  SpeechInputForm,
  SpeechInputMenuBox,
  TextMenuBtn
} from "../../styledComponents";

const Editor = () => {
  return (
    <ShadowedBox>
      <EditorLayout>
        <SpeechInputForm className="speech-editor-form-title">
          <input type="text" name="title" placeholder="Title" />
        </SpeechInputForm>
        <SpeechInputMenuBox>
          <TextMenuBtn>Header</TextMenuBtn>
          <TextMenuBtn>Itelic</TextMenuBtn>
          <TextMenuBtn>Bold</TextMenuBtn>
          <TextMenuBtn>Quote</TextMenuBtn>
        </SpeechInputMenuBox>
        <SpeechInputForm className="speech-editor-form-textarea">
          <textarea type="text" name="textarea" placeholder="Leave a comment" />
        </SpeechInputForm>
        <EditorBtn className="save-btn">Save</EditorBtn>
      </EditorLayout>
    </ShadowedBox>
  );
};

export { Editor };
