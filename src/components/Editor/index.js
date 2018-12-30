import React from "react";
import {
  EditorLayout,
  EditorBtn,
  ShadowedBox,
  SpeechInputForm,
  SpeechInputMenuBox
} from "../../styledComponents";

const Editor = () => {
  return (
    <ShadowedBox>
      <EditorLayout>
        <SpeechInputForm className="speech-editor-form-title">
          <input type="text" name="title" placeholder="title" />
        </SpeechInputForm>
        <SpeechInputMenuBox />
        <SpeechInputForm className="speech-editor-form-textarea">
          <textarea type="text" name="title" placeholder="leave a comment" />
        </SpeechInputForm>
        <EditorBtn className="save-btn">Save</EditorBtn>
      </EditorLayout>
    </ShadowedBox>
  );
};

export { Editor };
