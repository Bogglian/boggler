import styled from "styled-components";

const SpeechInputForm = styled.form`
  & {
    &.speech-editor-form-title {
      height: 8%;
      width: 100%;
      > input {
        width: 100%;
        height: 100%;
        outline: none;
        border-radius: 0px;
        font-size: 1rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        margin-top: 1%;
      }
    }

    &.speech-editor-form-textarea {
      height: 65%;
      width: 100%;
      > textarea {
        width: 100%;
        height: 100%;
        outline: none;
        border-radius: 0px;
        font-size: 1rem;
        padding: 0.5rem;
      }
    }
  }
`;

export { SpeechInputForm };
