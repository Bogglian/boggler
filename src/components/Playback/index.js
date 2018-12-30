import React from "react";
import { SPlayback } from "../../styledComponents";
import { AudioProgressbar } from "..";

const Playback = () => {
  return (
    <SPlayback>
      <div class="loading">
        <AudioProgressbar />
      </div>

      <div class="play-pause-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="24"
          viewBox="0 0 18 24"
        >
          <path
            fill="#566574"
            fill-rule="evenodd"
            d="M18 12L0 24V0"
            class="play-pause-icon"
            id="playPause"
          />
        </svg>
      </div>
    </SPlayback>
  );
};

export { Playback };
