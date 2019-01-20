import styled from "styled-components";
import oc from "open-color";
import { shadow } from "../../lib/styleUtil";

const AudioLayout = styled.div`
  & {
    background-color: ${oc.gray[5]};
    width: 100%;
    height 15rem;
    border-radius: 0.2rem;
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

const WaveLayout = styled.div`
  & {
    width: 100%;
    height: 100%;
    padding: 1%;
  }
`;


export {
  AudioLayout,
  Positioner,
  ShadowedBox,
  WaveLayout
};
