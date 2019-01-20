import React from "react";
import ReactPlayer from "react-player";
import Waveform from "./WaveForm";

import { VoiceWave, WaveLayout } from "../../styledComponents";

const Wave = ({
  url,
  onBuffer,
  onReady,
  onPlay,
  onPosChange,
  buffer,
  position
}) => {
  return (
    <WaveLayout>
      <VoiceWave>
        <Waveform
          width="400"
          height="200"
          buffer={buffer}
        />
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
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
