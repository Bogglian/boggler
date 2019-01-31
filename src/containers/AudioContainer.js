import React, { Component } from "react";

import { AudioProgressbar, Wave } from "../components";
import {
  AudioLayout,
  Positioner,
  ShadowedBox
} from "../styledComponents";
import { getAudioBuffer, getContext } from "../lib/utils";

class AudioContainer extends Component {
  state= {
    buffering: false,
    url: "",
    buffer: null
  }

  componentWillReceiveProps(next) {
    if (next.file !== this.props.file) {
      const url = window.URL.createObjectURL(next.file);
      this.getFileBuffer(url);
    }
  }

  handleBuffer = () => {
  };

  handlePlay = () => {
  };

  handleReady = () => {};

  getFileBuffer = async path => {
    const context = getContext();
    const fileBuffer = await getAudioBuffer(path, context);
    this.setState({
      buffer: fileBuffer,
      url: path
    })
  };

  render() {
    const {
      buffering,
      url,
      buffer
    } = this.state;
    return (
      <Positioner clasName="audio">
        <AudioProgressbar className={buffering ? "" : "none"} />
        <AudioLayout>
          <ShadowedBox>
            <div className="voicewave-box">
              <Wave
                url={url}
                onBuffer={this.handleBuffer}
                onReady={this.handleReady}
                onPlay={this.handlePlay}
                buffer={buffer}
              />
            </div>
          </ShadowedBox>
        </AudioLayout>
      </Positioner>
    );
  }
}

export default AudioContainer;
