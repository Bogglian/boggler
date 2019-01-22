import React from 'react';
import PropTypes from 'prop-types';
import { calculateWaveData, drawWaveform } from '../../lib/waveUtil';

class Waveform extends React.Component {
  state = {
    data: null
  };

  componentWillReceiveProps(next) {
    if (
      next.buffer !== this.props.buffer ||
      next.height !== this.props.height ||
      next.width !== this.props.width ||
      next.waveStyle.pointWidth !== this.props.waveStyle.pointWidth
    ) {
      const data = calculateWaveData(
        next.buffer,
        next.width,
        next.waveStyle.barDistance,
        next.waveStyle.pointWidth
      );
      this.setState({ data }, this.draw);
    } else if (
      Object.keys(next.waveStyle).some(
        k => next.waveStyle[k] !== this.props.waveStyle[k]
      )
    ) {
      this.draw(false, next);
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  handleKeyPress = (e) => {
    if(e.key === 'ArrowRight') {
      console.log('right');
    }

    if(e.key === 'ArrowLeft'){
      console.log('left');
    }
  }

  draw = async (animate = true, next) => {
    const props = next || this.props;
    drawWaveform(
      this.state.data,
      this.canvas,
      props.markerStyle,
      -1,
      {
        ...props.waveStyle,
        animate: props.waveStyle.animate && animate
      },
      props.height,
      props.width
    );
  };

  render() {
    return (
      <canvas
        tabIndex="0"
        onKeyDown={this.handleKeyPress}
        ref={canvas => (this.canvas = canvas)}
        style={{
          height: '100%',
          width: '100%'
        }}
      />
    );
  }
}

Waveform.defaultProps = {
  height: 300,
  waveStyle: {
    animate: true,
    color: '#38d9a9',
    plot: 'bar',
    pointWidth: 4,
    barDistance: 2
  },
  width: 500
};

Waveform.propTypes = {
  buffer: PropTypes.object,
  height: PropTypes.number,
  waveStyle: PropTypes.shape({
    animate: PropTypes.bool,
    color: PropTypes.string,
    plot: PropTypes.oneOf(['bar', 'line']),
    pointWidth: PropTypes.number,
    barDistance: PropTypes.number
  }),
  width: PropTypes.number
};

export default Waveform;
