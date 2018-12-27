import React from "react";
import {
  EditorLayout,
  ShadowedBox,
  SpeechInputForm,
  SpeechInputMenuBox
} from "../../styledComponents";

const Editor = () => {
  return (
    <ShadowedBox>
      <EditorLayout>
        <SpeechInputMenuBox />
        <SpeechInputForm className="speech-editor-form">
          <textarea />
        </SpeechInputForm>
      </EditorLayout>
    </ShadowedBox>
  );
};

export default Editor;
