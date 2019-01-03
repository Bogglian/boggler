import styled from "styled-components";
import oc from "open-color";
import { shadow } from "../../lib/styleUtil";

const ArticleLayout = styled.div`
  & {
    width: 100%;
    height: 100%;
    padding: 1%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

const AudioLayout = styled.div`
  & {
    background-color: ${oc.gray[5]};
    width: 100%;
    height 15rem;
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
    padding: 1%;
  }

  .postlist {
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

    &.none { display: none; }
    
  }
`;

const SpeechArticle = styled.div`
  & {
    background-color: ${oc.cyan[7]};
    padding: 1%;

    h2,
    h3 {
      margin: 0;
      float: left;
    }

    &.article-title {
      height: 10%;
    }

    &.article-content {
      margin-top: 1%;
      height: 78%;
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
    padding: 20px;
    padding-left: 50px;
    text-align: center;
    background-color: ${oc.gray[4]};
    border-bottom: 3px solid ${oc.cyan[1]};
    &:hover {
      background: ${oc.cyan[5]};
      ${shadow(1)};
    }
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
    width: 100%;
    height: 100%;
    padding: 1%;
  }
`;

export {
  ArticleLayout,
  AudioLayout,
  ContentLayout,
  EditorLayout,
  Positioner,
  PostWrapper,
  ShadowedBox,
  SpeechArticle,
  SpeechInputMenuBox,
  SPostItem,
  SPostNav,
  WaveLayout
};
