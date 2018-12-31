import React from "react";
import { ShadowedBox, WaveLoader } from "../../styledComponents";

const AudioProgressbar = ({ className }) => {
  return (
    <ShadowedBox className="wave-box">
      <WaveLoader className={className}>
        <div class="rectangle-1" />
        <div class="rectangle-2" />
        <div class="rectangle-3" />
        <div class="rectangle-4" />
        <div class="rectangle-5" />
        <div class="rectangle-6" />
        <div class="rectangle-7" />
        <div class="rectangle-8" />
        <div class="rectangle-7" />
        <div class="rectangle-6" />
        <div class="rectangle-5" />
        <div class="rectangle-4" />
        <div class="rectangle-3" />
        <div class="rectangle-2" />
        <div class="rectangle-1" />
      </WaveLoader>
    </ShadowedBox>
  );
};

export { AudioProgressbar };
