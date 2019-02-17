import styled from 'styled-components';
import oc from 'open-color';

const light = 3;
const color = [
  oc.lime[light],
  oc.green[light],
  oc.teal[light],
  oc.cyan[light],
  oc.blue[light],
  oc.indigo[light],
];

const VoiceWave = styled.div`
  & {
    width: 100%;
    height: 100%;
    display: block;
  }

  .player-wrapper {
    height: 3%;
    width: 97%;
    position: absolute;
  }
`;

const WaveLoader = styled.div`
  & {
    height: 0.8em;
    width: 100%;
    display: inherit;
    margin-top: 1.7%;

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

    .rectangle-9 {
      -webkit-animation-delay: 0.8s;
      animation-delay: 0.8s;
    }

    .rectangle-10 {
      -webkit-animation-delay: 0.9s;
      animation-delay: 0.9s;
    }

    .rectangle-11 {
      -webkit-animation-delay: 1s;
      animation-delay: 1s;
    }

    .rectangle-12 {
      -webkit-animation-delay: 1.1s;
      animation-delay: 1.1s;
    }

    .rectangle-13 {
      -webkit-animation-delay: 1.2s;
      animation-delay: 1.2s;
    }

    .rectangle-14 {
      -webkit-animation-delay: 1.3s;
      animation-delay: 1.3s;
    }

    .rectangle-15 {
      -webkit-animation-delay: 1.4s;
      animation-delay: 1.4s;
    }

    .rectangle-16 {
      -webkit-animation-delay: 1.5s;
      animation-delay: 1.5s;
    }

    .rectangle-17 {
      -webkit-animation-delay: 1.6s;
      animation-delay: 1.6s;
    }

    .rectangle-18 {
      -webkit-animation-delay: 1.7s;
      animation-delay: 1.7s;
    }

    .rectangle-19 {
      -webkit-animation-delay: 1.8s;
      animation-delay: 1.8s;
    }

    .rectangle-20 {
      -webkit-animation-delay: 1.9s;
      animation-delay: 1.9s;
    }

    .rectangle-21 {
      -webkit-animation-delay: 2s;
      animation-delay: 2s;
    }

    .rectangle-22 {
      -webkit-animation-delay: 2.1s;
      animation-delay: 2.1s;
    }

    .rectangle-23 {
      -webkit-animation-delay: 2.2s;
      animation-delay: 2.2s;
    }

    .rectangle-24 {
      -webkit-animation-delay: 2.3s;
      animation-delay: 2.3s;
    }

    .rectangle-25 {
      -webkit-animation-delay: 2.4s;
      animation-delay: 2.4s;
    }

    .rectangle-26 {
      -webkit-animation-delay: 2.5s;
      animation-delay: 2.5s;
    }

    .rectangle-27 {
      -webkit-animation-delay: 2.6s;
      animation-delay: 2.6s;
    }

    .rectangle-28 {
      -webkit-animation-delay: 2.7s;
      animation-delay: 2.7s;
    }

    .rectangle-29 {
      -webkit-animation-delay: 2.8s;
      animation-delay: 2.8s;
    }

    .rectangle-30 {
      -webkit-animation-delay: 2.9s;
      animation-delay: 2.9s;
    }

    .rectangle-31 {
      -webkit-animation-delay: 3s;
      animation-delay: 3s;
    }

    .rectangle-32 {
      -webkit-animation-delay: 3.1s;
      animation-delay: 3.1s;
    }

    .rectangle-33 {
      -webkit-animation-delay: 3.2s;
      animation-delay: 3.2s;
    }

    .rectangle-34 {
      -webkit-animation-delay: 3.3s;
      animation-delay: 3.3s;
    }

    .rectangle-35 {
      -webkit-animation-delay: 3.4s;
      animation-delay: 3.4s;
    }

    .rectangle-36 {
      -webkit-animation-delay: 3.5s;
      animation-delay: 3.5s;
    }

    .rectangle-37 {
      -webkit-animation-delay: 3.6s;
      animation-delay: 3.6s;
    }

    .rectangle-38 {
      -webkit-animation-delay: 3.7s;
      animation-delay: 3.7s;
    }

    .rectangle-39 {
      -webkit-animation-delay: 3.8s;
      animation-delay: 3.8s;
    }

    div {
      position: relative;
      display: inline-block;
      background: ${oc.cyan[0]};
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
      background: ${color[0]};
    }
    16.67% {
      -moz-transform: scaleY(3);
      background: ${color[1]};
    }
    33.33% {
      -moz-transform: scaleY(1);
      background: ${color[2]};
    }
    50% {
      -moz-transform: scaleY(3);
      background: ${color[3]};
    }
    66.67% {
      -moz-transform: scaleY(1);
      background: ${color[4]};
    }
    83.34% {
      -moz-transform: scaleY(3);
      background: ${color[5]};
    }
  }

  @-webkit-keyframes load {
    0%,
    100% {
      -webkit-transform: scaleY(1);
      background: ${color[0]};
    }
    16.67% {
      -webkit-transform: scaleY(3);
      background: ${color[1]};
    }
    33.33% {
      -webkit-transform: scaleY(1);
      background: ${color[2]};
    }
    50% {
      -webkit-transform: scaleY(3);
      background: ${color[3]};
    }
    66.67% {
      -webkit-transform: scaleY(1);
      background: ${color[4]};
    }
    83.34% {
      -webkit-transform: scaleY(3);
      background: ${color[5]};
    }
  }

  @keyframes load {
    0%,
    100% {
      transform: scaleY(1);
      background: ${color[0]};
    }
    16.67% {
      transform: scaleY(3);
      background: ${color[1]};
    }
    33.33% {
      transform: scaleY(1);
      background: ${color[2]};
    }
    50% {
      transform: scaleY(3);
      background: ${color[3]};
    }
    66.67% {
      transform: scaleY(1);
      background: ${color[4]};
    }
    83.34% {
      transform: scaleY(3);
      background: ${color[5]};
    }
  }
`;

export { WaveLoader, VoiceWave };
