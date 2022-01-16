/** @format */

import { refsHeader, refsMain } from "./refs";
import { index, moveNextSlide } from "./slides";
import {
  eighthStylesArrPrev,
  fifthStylesArrPrev,
  firstStylesArrPrev,
  fourthStylesArrPrev,
  secondStylesArrPrev,
  seventhStylesArrPrev,
  sixthStylesArrPrev,
  thirdStylesArrPrev,
} from "./stylesImgPrev";
import { bgNext } from "./valueImgNext";

const nextMoveOption = {
  moveSlide: moveNextSlide(),
  index: index - 1,
  bg: bgNext,
  headerClass: { name: refsHeader.tagline, value: "slider__img__none" },
  mainClass: [
    { name: refsMain.first, value: firstStylesArrPrev },
    { name: refsMain.second, value: secondStylesArrPrev },
    { name: refsMain.third, value: thirdStylesArrPrev },
    { name: refsMain.fourth, value: fourthStylesArrPrev },
    { name: refsMain.fifth, value: fifthStylesArrPrev },
    { name: refsMain.sixth, value: sixthStylesArrPrev },
    { name: refsMain.seventh, value: seventhStylesArrPrev },
    { name: refsMain.eighth, value: eighthStylesArrPrev },
  ],
    mainAttribute: [
        { name: , value:},
        { name: , value:},
        { name: , value:},
        { name: , value:},
        { name: , value:},
        { name: , value:},
        { name: , value:},
        { name: , value:},
    ],
};

export default nextMoveOption;
