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
  file,
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
          <div className="upload-box">
            <input className="file-name" value={file ? file.name: "파일선택"} disabled="disabled" />
            <label for="uploadFile">업로드</label>
            <input
              type="file"
              name="uploadFile"
              id="uploadFile"
              onChange={onChangeFile}
              accept=".wav, .raw, .mp3, .mp4, .flex, .m4a"
            />
          </div>
        </SpeechInputForm>
        <EditorBtn className="save-btn" onClick={onSubmit}>
          Save
        </EditorBtn>

      </EditorLayout>
    </ShadowedBox>
  );
};

export { Editor };
