import React, { Component } from 'react';

import { Wave } from '../components';
import { AudioLayout, Positioner, ShadowedBox } from '../styledComponents';
import { getAudioBuffer, getContext } from '../lib/utils';

class AudioContainer extends Component {
  state = {
    url: '',
    buffer: null,
    position: 0,
    seconds: 0,
  };

  componentWillReceiveProps(next) {
    if (next.file && next.file !== this.props.file) {
      const url = window.URL.createObjectURL(next.file);

      this.getFileBuffer(url);
    }
  }

  handleBuffer = () => {};

  handlePlay = () => {};

  handleReady = () => {};

  handlePosChange = () => {
    const { position, seconds } = this.state;
    const nowSeconds = seconds + 1;
    if (nowSeconds % 100 === 0) {
      this.setState({ position: 0, seconds: nowSeconds });
      return;
    }
    this.setState({ position: position + 0.01, seconds: nowSeconds });
  };

  getFileBuffer = async path => {
    const context = getContext();
    const fileBuffer = await getAudioBuffer(path, context);
    this.setState({
      buffer: fileBuffer,
      url: path,
    });
  };

  render() {
    const { url, buffer } = this.state;
    return (
      <Positioner className="audio">
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

export { AudioContainer };
