import React from "react";
import ReactPlayer from "react-player";
import Waveform from "waveform-react";

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
          onPositionChange={onPosChange}
          buffer={buffer}
          position={position}
          plot="bar"
          markerStyle={{
            color: "#fff",
            width: 4
          }}
          waveStyle={{
            animate: true,
            color: "#000",
            pointWidth: 1
          }}
          responsive="false"
          showPosition="true"
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
