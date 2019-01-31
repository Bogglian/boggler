import React from "react";
import ReactPlayer from "react-player";
import Wrapper from "./Wrapper";

import { VoiceWave, WaveLayout } from "../../styledComponents";

const Wave = ({
  url,
  seconds,
  onBuffer,
  onReady,
  onPlay,
  onPosChange,
  onWaveFormChange,
  buffer,
  position
}) => {
  return (
    <WaveLayout>
      <VoiceWave>
        <Wrapper
          width="400"
          height="200"
          buffer={buffer}
          position={position}
          seconds={seconds}
          onWaveFormChange={onWaveFormChange}
          showPosition={true}
        />
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          progressInterval={100}
          onProgress={onPosChange}
          onBuffer={onBuffer}
          onReady={onReady}
          onPlay={onPlay}
          controls
        />
      </VoiceWave>
    </WaveLayout>
  );
};

export { Wave };
