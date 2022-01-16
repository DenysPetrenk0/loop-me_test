/** @format */

import nextMove from "./next.js";
import prevMove from "./prev.js";

let xStart = null;

export const handleTouchStart = (event) => {
  const firstTouch = event.touches[0];
  xStart = firstTouch.clientX;
};

export const handleTouchMove = (event) => {
  if (!xStart) {
    return;
  }
  let xFinish = event.touches[0].clientX;

  let diff = xStart - xFinish;

  if (diff < 0) {
    prevMove();
  } else {
    nextMove();
  }

  xStart = null;
};
