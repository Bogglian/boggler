import styled from 'styled-components';

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
    height: 2rem;
    width: 10rem;
    position: absolute;
    top 40%;
    left: 8%;

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
    .rectangle-7 {
      -webkit-animation-delay: 0.6s;
      animation-delay: 0.6s;
    }
    .rectangle-8 {
      -webkit-animation-delay: 0.7s;
      animation-delay: 0.7s;
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

export { WaveLoader, VoiceWave };
