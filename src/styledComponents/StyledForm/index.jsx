import styled from "styled-components";
import oc from "open-color";

const SpeechInputForm = styled.form`
  & {
    & + & {
      margin-top: 1rem;
    }

    .speech-editor-form input {
      width: 100%;
      border: 1px solid ${oc.gray[3]};
      outline: none;
      border-radius: 0px;
      line-height: 2.5rem;
      font-size: 1rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
`;

export { SpeechInputForm };
