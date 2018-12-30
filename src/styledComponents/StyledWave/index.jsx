import styled from "styled-components";
import oc from "open-color";

const VoiceWave = styled.div`
  & {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

const WaveLoader = styled.div`
  & {
    height: 4rem;
    width: 10rem;
    position: absolute;
    top: 47%;
    left: 47%;

    &.none {
      display: none;
    }

    .rectangle-2 {
      -webkit-animation-delay: 0.1s;
      animation-delay: 0.1s;
    }
    .rectangle-3 {
      -webkit-animation-delay: 0.2s;
      animation-delay: 0.2s;
    }
    .rectangle-4 {
      -webkit-animation-delay: 0.3s;
      animation-delay: 0.3s;
    }
    .rectangle-5 {
      -webkit-animation-delay: 0.4s;
      animation-delay: 0.4s;
    }
    .rectangle-6 {
      -webkit-animation-delay: 0.5s;
      animation-delay: 0.5s;
    }
    div {
      position: relative;
      display: inline-block;
      background: #03a9f4;
      height: 100%;
      width: 10px;
      margin: 0;
      -webkit-animation: load 3s ease-in-out infinite;
      animation: load 3s ease-in-out infinite;
    }
  }

  @-moz-keyframes load {
    0%,
    100% {
      -moz-transform: scaleY(1);
      background: #03a9f4;
    }
    16.67% {
      -moz-transform: scaleY(3);
      background: #ff5722;
    }
    33.33% {
      -moz-transform: scaleY(1);
      background: #ff5252;
    }
    50% {
      -moz-transform: scaleY(3);
      background: #e91e63;
    }
    66.67% {
      -moz-transform: scaleY(1);
      background: #9c27b0;
    }
    83.34% {
      -moz-transform: scaleY(3);
      background: #673ab7;
    }
  }

  @-webkit-keyframes load {
    0%,
    100% {
      -webkit-transform: scaleY(1);
      background: #03a9f4;
    }
    16.67% {
      -webkit-transform: scaleY(3);
      background: #ff5722;
    }
    33.33% {
      -webkit-transform: scaleY(1);
      background: #ff5252;
    }
    50% {
      -webkit-transform: scaleY(3);
      background: #e91e63;
    }
    66.67% {
      -webkit-transform: scaleY(1);
      background: #9c27b0;
    }
    83.34% {
      -webkit-transform: scaleY(3);
      background: #673ab7;
    }
  }

  @keyframes load {
    0%,
    100% {
      transform: scaleY(1);
      background: #03a9f4;
    }
    16.67% {
      transform: scaleY(3);
      background: #ff5722;
    }
    33.33% {
      transform: scaleY(1);
      background: #ff5252;
    }
    50% {
      transform: scaleY(3);
      background: #e91e63;
    }
    66.67% {
      transform: scaleY(1);
      background: #9c27b0;
    }
    83.34% {
      transform: scaleY(3);
      background: #673ab7;
    }
  }
`;

const WaveSlider = styled.div`
  & {
    width: 100%;
    height: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;

    .audio.green-audio-player {
      width: 100%;
      height: 100%;
      user-select: none;
      -webkit-user-select: none;

    .slider {
      flex-grow: 1;
      background-color: #fff;
      cursor: pointer;
      position: relative;

      .progress {
        background-color: #fff;
        border-radius: inherit;
        position: absolute;
        pointer-events: none;

        .pin {
          height: 1em;
          width: 1em;
          border-radius: 1em;
          background-color: ${oc.cyan[4]};
          position: absolute;
          pointer-events: all;
        }
      }
    }

    .controls {
      width: 100%;
      margin-left: 1%;
      padding-top: 0.1rem;
      font-family: 'Roboto', sans-serif;
      font-size: 1em;
      color: #ddd;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .slider {
        margin-left: 1em;
        margin-right: 1em;
        height: 0.3rem;

        .progress {        
          width: 1%;
          height: 100%;

          .pin {
            right: -0.5em;
            top: -0.3em;
          }
        }
      }
      
      span {
        cursor: default;
      }
    }

    .volume {
      text-align: center;
      padding-top: 0.1rem;
      padding: 3%;
      
      .volume-btn {
        cursor: pointer;
        
        &.open path {
          fill: ${oc.cyan[4]};
        }
      }

      .volume-controls {
        width: 30px;
        height: 135px;
        background-color: rgba(0, 0, 0, 0.62);
        border-radius: 7px;
        position: absolute;
        left: -3px;
        bottom: 52px;
        flex-direction: column;
        align-items: center;
        display: flex;

        &.hidden {
          display: none;
        }

        .slider {
          margin-top: 12px;
          margin-bottom: 12px;
          width: 6px;
          border-radius: 3px;

          .progress {
            bottom: 0;
            height: 100%;
            width: 6px;

            .pin {
              left: -5px;
              top:0.5em;
        }
          }
        }
      }    
    }
  }
  
  @keyframes spin {
    from {
      transform: rotateZ(0);
    }
    to {
      transform: rotateZ(1turn);
    }
  }
`;

export { VoiceWave, WaveLoader, WaveSlider };
