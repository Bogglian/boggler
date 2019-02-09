import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../lib/styleUtil';

const AudioLayout = styled.div`
  & {
    background-color: ${oc.gray[5]};
    width: 100%;
    height 15rem;
    border-radius: 0.2rem;
  }
`;

const ButtonLayout = styled.div`
  & {
    display: flex;
    flex-direction: row-reverse;
    padding-right: 0.4%;

    form {
      display: inherit;
    }

    label {
      ${shadow(1)};
      border-radius: 0.2em;
      background-color: ${oc.cyan[3]};
      display: inherit;
      padding: 0.6em 0.8em;
      text-align: center;
      font-size: 1.3em;
      margin-right: 2%;
      font-weight: bold;

      :hover {
        color: white;
        background-color: ${oc.cyan[5]};
      }
      :active {
        background-color: ${oc.cyan[3]};
      }
    }
  }
`;

const MarkdownLayout = styled.div`
  & {
    background-color: ${oc.gray[5]};
    width: 100%;
    height: 30rem;
    border-radius: 0.2rem;
  }
`;

const Positioner = styled.div`
  & {
    width: 100%;
    height: 100%;
    padding: 0.3%;
  }
`;

const ProgressLayout = styled.div`
  & {
    width: 100%;
    height: 100%;
    display: inherit;
    text-align: center;
  }
`;

const ShadowedBox = styled.div`
  & {
    width: 100%;
    height: 100%;
    ${shadow(2)};
    display: flex;
    border-radius: inherit;

    .editor-box {
      width: 50%;
      height: 100%;
      background-color: ${oc.gray[7]};
      border-radius: inherit;
      
      .react-codemirror2 {
        height: 100%;
        border-radius: inherit;
      }

      .CodeMirror-wrap {
        height: 100%;
        border-radius: inherit;
      }

      * {
        font-size: 1.02em;
      }
      .cm-header-1 {
        font-size: 2em;
      }
      .cm-header-2 {
        font-size: 1.5em;
      }
      .cm-header-3 {
        font-size: 1.17em;
      }
      .cm-header-4 {
        font-size: 1em;
      }
      .cm-header-5 {
        font-size: 0.83em;
      }
      .cm-header-5 {
        font-size: 0.67em;
      }
    }

    .viewer-box {
      width: 50%;
      height: 100%;
      border-radius: inherit;
      overflow: auto;
      padding: 1%;

      * {
        margin: 0px;
      }

      blockquote {
        margin-left: 0px;
        margin-right: 0px;
        padding-left: 10px;
        padding-right: 10px;
        border-left: 10px solid ${oc.gray[6]};
      }

      code {
        font-size: 1.2em;
      }
    }

    .voicewave-box {
      width: 100%;
      height: 100%;
      background-color: ${oc.gray[7]};
      border-radius: inherit;
    }

    .input-box {
      width: 100%;
      width: 10%;
      height: 100%;
    }

    &.wave-box {
      width: 11rem;
      height: 11rem;
      border-radius: 4px;
      position: absolute;
      top 6%;
      left: 43.8%;
    }

    &.wave-box-stt {
      width: 100%;
      height: 8rem;
      border-radius: 4px;
      position: relative;
      display: inherite;
    }

    &.none { display: none; }

  }
`;

const StyledInput = styled.input`
  & {
    width: 100%;
    height: 100%;
    ${shadow(1)};
    display: flex;
    border-radius: inherit;
  }

  &#file-upload {
    display: none;
  }

  &#file-submit {
    font-weight: bold;
    background-color: ${oc.cyan[3]};
    border-radius: 0.2em;
    margin-right: 2%;
    display: inherit;
    padding: 0.6em 0.8em;
    font-size: 1.2em;

    :hover {
      color: white;
      background-color: ${oc.cyan[5]};
    }
    :active {
      background-color: ${oc.cyan[3]};
    }
  }
`;

const WaveLayout = styled.div`
  & {
    width: 100%;
    height: 100%;
    padding: 1%;
  }
`;

export {
  AudioLayout,
  ButtonLayout,
  MarkdownLayout,
  Positioner,
  ProgressLayout,
  ShadowedBox,
  StyledInput,
  WaveLayout,
};
