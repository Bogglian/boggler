import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../lib/styleUtil';

const SpeechInputForm = styled.form`
  & {
    &.speech-editor-form-title {
      height: 8%;
      width: 100%;
      > input[type='text'] {
        width: 100%;
        height: 100%;
        outline: none;
        border-radius: 0px;
        font-size: 1rem;
        margin-top: 1%;
        padding-left: 0.5rem;
        padding-right: 0.5rem;

        &:focus {
          border: 2px solid ${oc.cyan[6]};
          ${shadow(1)};
        }
      }
    }

    &.speech-editor-form-textarea {
      height: 64.3%;
      width: 100%;
      > textarea {
        width: 100%;
        height: 100%;
        outline: none;
        border-radius: 0px;
        font-size: 1rem;
        padding: 0.5rem;

        &:focus {
          border: 2px solid ${oc.cyan[6]};
          ${shadow(1)};
        }
      }
      .upload-box {
        > input[type='file'] {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }

        > label {
          display: inline-block;
          padding: 0.5em 0.75em;
          color: #999;
          font-size: inherit;
          line-height: normal;
          vertical-align: middle;
          background-color: #fdfdfd;
          cursor: pointer;
          border-radius: 2px;
          &:hover {
            background: ${oc.cyan[6]};
            color: white;
            ${shadow(1)};
          }
        }

        .file-name {
          display: inline-block;
          padding: 0.5em 0.75em;
          margin-right: 0.5em;
          font-size: inherit;
          font-family: inherit;
          line-height: normal;
          vertical-align: middle;
          background-color: #f5f5f5;
          border: 1px solid #ebebeb;
          border-bottom-color: #e2e2e2;
          border-radius: 2px;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
      }
    }
  }
`;

const PostItemContent = styled.p`
  & {
    font-size: 120%;
  }
`;

const PostItemTime = styled.div`
  & {
    font-size: 70%;
  }
`;

export { SpeechInputForm, PostItemContent, PostItemTime };
