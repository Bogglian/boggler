import styled from "styled-components";
import oc from "open-color";
import { shadow } from "../../lib/styleUtil";

const AudioLayout = styled.div`
  & {
    background-color: ${oc.gray[5]};
    width: 100%;
    height: 13rem;
    border-radius: 0.2rem;
  }
`;

const ContentLayout = styled.div`
  & {
    background-color: ${oc.gray[4]};
    width: 100%;
    height 32rem;
    text-align: center;
    margin-top: 1%;
    border-radius: 0.2rem;
  }
`;

const EditorLayout = styled.div`
  & {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    padding: 1rem;
  }
`;

const Positioner = styled.div`
  & {
    width: 100%;
    height: 100%;
    padding: 2%;
  }

  .postlist {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .audio {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

const PostWrapper = styled.div`
  & {
    width: 100%;
    height: 46rem;
    background-color: ${oc.gray[3]};
  }
`;

const ShadowedBox = styled.div`
  & {
    width: 100%;
    height: 100%;
    ${shadow(2)};
    display: flex;
    border-radius: inherit;

    .playback-box {
      width: 10%;
      height: 100%;
      background-color: ${oc.gray[6]};
      border-radius: inherit;
    }

    .voicewave-box {
      width: 90%;
      height: 100%;
      background-color: ${oc.gray[7]};
      border-radius: inherit;
    }

    .input-box {
      width: 100%;
      width: 10%;
      height: 100%;
    }
  }
`;

const SpeechInputMenuBox = styled.div`
  & {
    width: 100%;
    height: 10%;
    margin-top: 3%;
    background-color: ${oc.cyan[6]};
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const SPostItem = styled.div`
  & {
    width: 100%;
    height: 8.5rem;
    background-color: ${oc.gray[5]};
  }
`;

const SPostNav = styled.div`
  & {
    width: 100%;
    height: 3.5rem;
    background-color: ${oc.cyan[5]};
    text-align: center;
  }
`;

const WaveLayout = styled.div`
  & {
  }
`;

export {
  AudioLayout,
  ContentLayout,
  EditorLayout,
  Positioner,
  PostWrapper,
  ShadowedBox,
  SpeechInputMenuBox,
  SPostItem,
  SPostNav,
  WaveLayout
};
