import styled from "styled-components";
import oc from "open-color";
import { shadow } from "../../lib/styleUtil";

const ContentLayout = styled.div`
  & {
    background-color: ${oc.gray[4]};
    width: 100%;
    height 32rem;
    text-align: center;
    margin-top: 1%;
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

    .playback-box {
      width: 10%;
      height: 100%;
      background-color: ${oc.gray[6]};
    }

    .voicewave-box {
      width: 90%;
      height: 100%;
      background-color: ${oc.gray[7]};
    }
  }
`;

const SpeechInputMenuBox = styled.div`
  & {
    width: 100%;
    height: 10%;
    background-color: ${oc.cyan[7]};
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
    background-color: ${oc.gray[5]};
    width: 100%;
    height: 13rem;
    text-align: center;
  }
`;

export {
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
