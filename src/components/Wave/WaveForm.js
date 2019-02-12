import React from 'react';
import PropTypes from 'prop-types';
import { calculateWaveData, drawWaveform, getDataOfPage } from '../../lib/waveUtil';

class Waveform extends React.Component {
  state = {
    data: null,
    nowPage: 0,
    maxPage: 0
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
      const maxPage = parseInt(next.buffer.duration / 10);
      this.setState({
        data: data,
        nowPage: 0,
        maxPage: maxPage
      }, this.draw);
    } else if (
      Object.keys(next.waveStyle).some(
        k => next.waveStyle[k] !== this.props.waveStyle[k]
      )
    ) {
      this.draw(false, next);
    } else if (this.verifyDrawablePage(next.seconds) && next.seconds !== this.props.seconds) {
      this.drawPage(parseInt(next.seconds / 100));
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  handleKeyPress = (e) => {
    if(e.key === 'ArrowRight') {
      this.drawNextPage();
    }

    if(e.key === 'ArrowLeft'){
      this.drawPreviousPage();
    }
  }

  drawPage = (page) => {
    this.setState({
      nowPage: page
    });
    this.draw(false, this.props, page);
  }

  drawNextPage = () => {
    const { nowPage, maxPage } = this.state;
    if(nowPage < maxPage){
      this.drawPage(nowPage + 1);
    }
  }

  drawPreviousPage = () => {
    const { nowPage } = this.state;
    if(nowPage > 0){
      this.drawPage(nowPage - 1);
    }
  }

  verifyDrawablePage = (seconds) => {
    const { nowPage } = this.state;
    return ( seconds % 100 === 0 || parseInt(seconds / 100) !== nowPage);
  }

  draw = async (animate = true, next, nextPage = 0) => {
    const { data, maxPage }= this.state;
    const step = parseInt(data.length / (this.props.buffer.duration / 10));
    const drawingData = getDataOfPage(nextPage, maxPage, step, data);
    const props = next || this.props;
    drawWaveform(
      drawingData,
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
    pointWidth: 10,
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
  width: PropTypes.number,
  seconds: PropTypes.number,
  onWaveFormChange: PropTypes.func
};

export default Waveform;
