import React from 'react';
import PropTypes from 'prop-types';

const Position = ({ id, markerStyle, position }) => (
  <div
    id={id}
    style={{
      background: markerStyle.color,
      height: '100%',
      left: `${position * 100}%`,
      position: 'absolute',
      top: 0,
      transition: 'all 20ms ease-in-out',
      width: `${markerStyle.width}px`,
    }}
  />
);

Position.defaultProps = {
  markerStyle: {
    color: '#fff',
    width: 2,
  },
  position: 0,
};

Position.propTypes = {
  id: PropTypes.string,
  markerStyle: PropTypes.shape({
    color: PropTypes.string,
    width: PropTypes.number,
  }),
  position: PropTypes.number,
};

export { Position };
