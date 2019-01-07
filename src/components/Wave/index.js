import React from "react";
import ReactPlayer from "react-player";
import Waveform from "waveform-react";

import { VoiceWave, WaveLayout } from "../../styledComponents";

const Wave = ({
  audioPath,
  onBuffer,
  onReady,
  onPlay,
  onPosChange,
  buffer,
  markerStyle,
  position,
  waveStyle
}) => {
  return (
    <WaveLayout>
      <VoiceWave>
        <Waveform
          width="100%"
          height="50%"
          onPositionChange={onPosChange}
          buffer={buffer}
          position={position}
          markerStyle={markerStyle}
          waveStyle={waveStyle}
          responsive
          showPosition
        />
        <ReactPlayer
          width="100%"
          height="50%"
          onBuffer={onBuffer}
          onReady={onReady}
          onPlay={onPlay}
          url={audioPath}
          playing
          controls
        />
      </VoiceWave>
    </WaveLayout>
  );
};

export { Wave };
