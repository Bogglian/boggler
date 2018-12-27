import styled from "styled-components";

const SpeechInputForm = styled.form`
  & {
    width: 100%;
    height: 90%;
  }

  &.speech-editor-form textarea {
    width: 100%;
    height: 100%;
    outline: none;
    border-radius: 0px;
    font-size: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

export { SpeechInputForm };
