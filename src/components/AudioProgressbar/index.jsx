import React from 'react';
import { WaveLoader, ProgressLayout, Positioner } from '../../styledComponents';

const AudioProgressbar = ({ className }) => (
  <Positioner>
    <ProgressLayout>
      <WaveLoader className={className}>
        <div className="rectangle-5" />
        <div className="rectangle-4" />
        <div className="rectangle-3" />
        <div className="rectangle-2" />
        <div className="rectangle-1" />
        <div className="rectangle-2" />
        <div className="rectangle-3" />
        <div className="rectangle-4" />
        <div className="rectangle-5" />
      </WaveLoader>
    </ProgressLayout>
  </Positioner>
);

export { AudioProgressbar };
