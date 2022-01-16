/** @format */
import { movePrevSlide, index } from "./slides.js";
import setAttribute from "./setAttribute.js";
import {
  bgPrev,
  eighthElementsPrev,
  fifthElementsPrev,
  firstElementsPrev,
  fourthElementsPrev,
  headerImgPrev,
  headerNewPrev,
  secondElementsPrev,
  seventhElementsPrev,
  sixthElementsPrev,
  thirdElementsPrev,
} from "./valueImgPrev.js";
import { refsHeader, refsMain } from "./refs.js";
import classWork from "./classWork.js";
import {
  eighthStylesArrPrev,
  fifthStylesArrPrev,
  firstStylesArrPrev,
  fourthStylesArrPrev,
  secondStylesArrPrev,
  seventhStylesArrPrev,
  sixthStylesArrPrev,
  thirdStylesArrPrev,
} from "./stylesImgPrev.js";

const prevMove = () => {
  movePrevSlide();
  document.body.style.backgroundImage = `url(${bgPrev[index]})`;

  classWork(refsHeader.tagline, "slider__img__none");

  classWork(refsMain.first, firstStylesArrPrev[index]);
  classWork(refsMain.second, secondStylesArrPrev[index]);
  classWork(refsMain.third, thirdStylesArrPrev[index]);
  classWork(refsMain.fourth, fourthStylesArrPrev[index]);
  classWork(refsMain.fifth, fifthStylesArrPrev[index]);
  classWork(refsMain.sixth, sixthStylesArrPrev[index]);
  classWork(refsMain.seventh, seventhStylesArrPrev[index]);
  classWork(refsMain.eighth, eighthStylesArrPrev[index]);

  setAttribute(refsHeader.headerImg, "src", headerImgPrev[index]);
  setAttribute(refsHeader.new, "src", headerNewPrev[index]);

  setAttribute(
    refsMain.first,
    firstElementsPrev[index].attr,
    firstElementsPrev[index].value
  );
  setAttribute(
    refsMain.second,
    secondElementsPrev[index].attr,
    secondElementsPrev[index].value
  );
  setAttribute(
    refsMain.third,
    thirdElementsPrev[index].attr,
    thirdElementsPrev[index].value
  );
  setAttribute(
    refsMain.fourth,
    fourthElementsPrev[index].attr,
    fourthElementsPrev[index].value
  );
  setAttribute(
    refsMain.fifth,
    fifthElementsPrev[index].attr,
    fifthElementsPrev[index].value
  );
  setAttribute(
    refsMain.sixth,
    sixthElementsPrev[index].attr,
    sixthElementsPrev[index].value
  );
  setAttribute(
    refsMain.seventh,
    seventhElementsPrev[index].attr,
    seventhElementsPrev[index].value
  );
  setAttribute(
    refsMain.eighth,
    eighthElementsPrev[index].attr,
    eighthElementsPrev[index].value
  );
};

export default prevMove;
