import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Wrapper from './Wrapper';
import { VoiceWave, WaveLayout } from '../../styledComponents';
class Wave extends Component {
  state = {
    position: 0,
    seconds: 0,
  };

  handlePosChange = () => {
    const { position, seconds } = this.state;
    const currentTime = this.player.getCurrentTime();
    const nowSeconds = Math.ceil(currentTime * 10);
    const nowPosition = currentTime / 10 - Math.floor(currentTime / 10);

    if (nowSeconds % 100 === 0) {
      this.setState({ position: 0, seconds: nowSeconds });
      return;
    }
    this.setState({ position: nowPosition, seconds: nowSeconds });
  };

  ref = player => {
    this.player = player;
  };

  render() {
    const { url, onBuffer, onReady, onPlay, buffer } = this.props;
    const { seconds, position } = this.state;
    return (
      <WaveLayout>
        <VoiceWave>
          <Wrapper
            width="1650"
            height="200"
            buffer={buffer}
            position={position}
            seconds={seconds}
            showPosition={true}
          />
          <div className="player-wrapper">
            <ReactPlayer
              ref={this.ref}
              url={url}
              width="100%"
              height="100%"
              progressInterval={70}
              onProgress={this.handlePosChange}
              onBuffer={onBuffer}
              onReady={onReady}
              onPlay={onPlay}
              controls
            />
          </div>
        </VoiceWave>
      </WaveLayout>
    );
  }
}

export { Wave };
