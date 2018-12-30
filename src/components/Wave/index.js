import React from "react";
import { VoiceWave, WaveLayout, WaveSlider } from "../../styledComponents";

const Wave = () => {
  return (
    <WaveLayout>
      <VoiceWave />
      <WaveSlider>
        <div className="audio green-audio-player">
          <div className="controls">
            <span className="current-time">0:00</span>
            <div className="slider" data-direction="horizontal">
              <div className="progress">
                <div className="pin" id="progress-pin" data-method="rewind" />
              </div>
            </div>
            <span className="total-time">0:00</span>

            <div className="volume">
              <div className="volume-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#566574"
                    fill-rule="evenodd"
                    d="M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z"
                    id="speaker"
                  />
                </svg>
              </div>
              <div className="volume-controls hidden">
                <div className="slider" data-direction="vertical">
                  <div className="progress">
                    <div
                      className="pin"
                      id="volume-pin"
                      data-method="changeVolume"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <audio crossorigin>
            <source
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
      </WaveSlider>
    </WaveLayout>
  );
};

export { Wave };
