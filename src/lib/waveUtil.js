import oc from "open-color";

/**
 * Animate the drawing of a bar wave
 */
const light = 3;
const color = [oc.red[light], oc.orange[light], oc.yellow[light], oc.lime[light], oc.green[light], oc.teal[light],
                oc.cyan[light], oc.blue[light], oc.indigo[light], oc.violet[light], oc.grape[light], oc.pink[light]];

const animateBar = (ctx, bounds, style, maxAmp, scaleFactor = 1) => {
  if (scaleFactor <= 100) {
    setTimeout(() => {
      requestAnimationFrame(() =>
        drawPoints(ctx, bounds, style, maxAmp, scaleFactor)
      );
    }, 1);
  }
};

/**
 * Calculate all wave data points
 */
export const calculateWaveData = (buffer, width, barDistance, pointWidth) => {
  if (!buffer) return [];
  // get the wave data
  console.log(buffer.duration / 10);
  //Seconds to be shown on a single screen
  const seconds = 10;
  const wave = buffer.getChannelData(0);
  const pointCnt = width / (pointWidth + barDistance) * (buffer.duration / 10);
  console.log(pointCnt);
  // find how many steps we are going to draw
  const step = Math.ceil(wave.length / pointCnt);
  // Get array of bounds of each step
  return getBoundArray(wave, pointCnt, step);
};
/**
 * Convienence function to draw a point in waveform
 */
const drawPoint = (ctx, x, y, width, height, type) => {
  if (type === 'bar') {
    ctx.fillRect(x, y, width, height);
  } else {
    ctx.lineTo(x, y);
    ctx.lineTo(x + width / 2, y + height);
  }
};
/**
 * Draw all the points in the wave
 */
const drawPoints = (ctx, bounds, style, maxAmp, scaleFactor = 1) => {
  console.log("scaleFactor2 : " + scaleFactor);
  bounds.forEach((bound, i) => {
    ctx.fillStyle = color[i % 12];
    //선의 색
    ctx.strokeStyle = color[i % 12];
    drawPoint(
      ctx,
      i * (style.pointWidth + style.barDistance),
      (1 + bound.min) * maxAmp,
      style.pointWidth,
      Math.max(1, (bound.max - bound.min) * maxAmp) * scaleFactor,
      style.plot
    );
  });
  if (style.plot === 'line') {
    ctx.stroke();
  }
};
/**
 * Draw a waveform on a canvas
 * buffer - waveform buffer
 * canvas - HTML5 canvas reference
 * style - line style to use (color)
 */
export const drawWaveform = (
  bounds,
  canvas,
  markerStyle,
  position = -1,
  waveStyle,
  height = 300,
  width
) => {
  if (!canvas || !bounds || !bounds.length) return;
  const ctx = canvas.getContext('2d');
  // clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // get our canvas size
  const canvasSize = {
    height: (canvas.height = height),
    width: (canvas.width = width)
  };
  //도형 내부 색
  ctx.fillStyle = waveStyle.color;
  //선의 색
  ctx.strokeStyle = waveStyle.color;
  // find the max height we can draw
  const maxAmp = canvasSize.height / 2 -10;
  console.log("maxAmp!! : " + maxAmp);
  if (waveStyle.animate) {
    if (waveStyle.plot === 'bar') {
      animateBar(ctx, bounds, waveStyle, maxAmp, 1);
    }
  } else {
    drawPoints(ctx, bounds, waveStyle, maxAmp);
  }
};
/**
 * Calculate the bounds of each step in the buffer
 */
const getBoundArray = (wave, pointCnt, step) => {
  let bounds = [];
  for (let i = 0; i < pointCnt; i++) {
    // get the max and min values at this step
    bounds = [...bounds, getBounds(wave.slice(i * step, i * step + step))];
  }
  console.log(bounds);
  return bounds;
};
/**
 * Get the max and min values of an array
 */
const getBounds = values => {
  return values.reduce(
    (total, v) => ({
      max: v > total.max ? v : total.max,
      min: v < total.min ? v : total.min
    }),
    { max: -1.0, min: 1.0 }
  );
};

export const getDataOfPage = (nowPage, maxPage, step, data) => {
   if (nowPage === maxPage) {
     return data.slice(nowPage * step, data.length);
   }
   return data.slice(nowPage * step, nowPage * step + step);
};
