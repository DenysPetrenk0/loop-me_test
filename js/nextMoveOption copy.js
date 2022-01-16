/** @format */

import { refsHeader, refsMain } from "./refs.js";
import { index, moveNextSlide } from "./slides.js";
import {
  firstStylesArrNext,
  secondStylesArrNext,
  thirdStylesArrNext,
  fourthStylesArrNext,
  fifthStylesArrNext,
  sixthStylesArrNext,
  seventhStylesArrNext,
  eighthStylesArrNext,
} from "./stylesImgNext.js";
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

const nextMoveOption = {
  moveSlide: moveNextSlide(),
  index: index - 1,
  bg: bgNext,
  headerClass: { name: refsHeader.tagline, value: "slider__img__none" },
  hederAttribute: [
    { name: refsHeader.headerImg, value: headerImgNext },
    { name: refsHeader.new, value: headerNewNext },
  ],
  mainClass: [
    { name: refsMain.first, value: firstStylesArrNext },
    { name: refsMain.second, value: secondStylesArrNext },
    { name: refsMain.third, value: thirdStylesArrNext },
    { name: refsMain.fourth, value: fourthStylesArrNext },
    { name: refsMain.fifth, value: fifthStylesArrNext },
    { name: refsMain.sixth, value: sixthStylesArrNext },
    { name: refsMain.seventh, value: seventhStylesArrNext },
    { name: refsMain.eighth, value: eighthStylesArrNext },
  ],
  mainAttribute: [
    { name: refsMain.first, value: firstElementsNext },
    { name: refsMain.second, value: secondElementsNext },
    { name: refsMain.third, value: thirdElementsNext },
    { name: refsMain.fourth, value: fourthElementsNext },
    { name: refsMain.fifth, value: fifthElementsNext },
    { name: refsMain.sixth, value: sixthElementsNext },
    { name: refsMain.seventh, value: seventhElementsNext },
    { name: refsMain.eighth, value: eighthElementsNext },
  ],
};

export default nextMoveOption;
