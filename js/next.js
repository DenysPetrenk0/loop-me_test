/** @format */

import { moveNextSlide, index } from "./slides.js";
import setAttribute from "./setAttribute.js";
import {
  bgNext,
  eighthElementsNext,
  fifthElementsNext,
  firstElementsNext,
  fourthElementsNext,
  headerImgNext,
  headerNewNext,
  secondElementsNext,
  seventhElementsNext,
  sixthElementsNext,
  thirdElementsNext,
} from "./valueImgNext.js";
import {
  eighthStylesArrNext,
  fifthStylesArrNext,
  firstStylesArrNext,
  fourthStylesArrNext,
  secondStylesArrNext,
  seventhStylesArrNext,
  sixthStylesArrNext,
  thirdStylesArrNext,
} from "./stylesImgNext.js";
import { refsHeader, refsMain } from "./refs.js";
import classWork from "./classWork.js";

const nextMove = () => {
  moveNextSlide();
  document.body.style.backgroundImage = `url(${bgNext[index - 1]})`;

  classWork(refsHeader.tagline, "slider__img__none");

  classWork(refsMain.first, firstStylesArrNext[index - 1]);
  classWork(refsMain.second, secondStylesArrNext[index - 1]);
  classWork(refsMain.third, thirdStylesArrNext[index - 1]);
  classWork(refsMain.fourth, fourthStylesArrNext[index - 1]);
  classWork(refsMain.fifth, fifthStylesArrNext[index - 1]);
  classWork(refsMain.sixth, sixthStylesArrNext[index - 1]);
  classWork(refsMain.seventh, seventhStylesArrNext[index - 1]);
  classWork(refsMain.eighth, eighthStylesArrNext[index - 1]);

  setAttribute(refsHeader.headerImg, "src", headerImgNext[index - 1]);
  setAttribute(refsHeader.new, "src", headerNewNext[index - 1]);

  setAttribute(
    refsMain.first,
    firstElementsNext[index - 1].attr,
    firstElementsNext[index - 1].value
  );
  setAttribute(
    refsMain.second,
    secondElementsNext[index - 1].attr,
    secondElementsNext[index - 1].value
  );
  setAttribute(
    refsMain.third,
    thirdElementsNext[index - 1].attr,
    thirdElementsNext[index - 1].value
  );
  setAttribute(
    refsMain.fourth,
    fourthElementsNext[index - 1].attr,
    fourthElementsNext[index - 1].value
  );
  setAttribute(
    refsMain.fifth,
    fifthElementsNext[index - 1].attr,
    fifthElementsNext[index - 1].value
  );
  setAttribute(
    refsMain.sixth,
    sixthElementsNext[index - 1].attr,
    sixthElementsNext[index - 1].value
  );
  setAttribute(
    refsMain.seventh,
    seventhElementsNext[index - 1].attr,
    seventhElementsNext[index - 1].value
  );
  setAttribute(
    refsMain.eighth,
    eighthElementsNext[index - 1].attr,
    eighthElementsNext[index - 1].value
  );
};

export default nextMove;
