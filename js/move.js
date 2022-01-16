/** @format */

import classWork from "./classWork.js";
import setAttribute from "./setAttribute.js";

const move = ({
  moveSlide,
  bg,
  index,
  headerClass,
  mainClass,
  mainAttribute,
  hederAttribute,
}) => {
  moveSlide();
  document.body.style.backgroundImage = `url(${bg[index]})`;
  classWork(headerClass.name, headerClass.value);

  mainClass.forEach((element) => {
    classWork(element.name, element.value[index]);
  });

  hederAttribute.forEach((element) => {
    setAttribute(element.name, "src", element.value[index].value);
  });

  mainAttribute.forEach((element) => {
    setAttribute(
      element.name,
      element.value[index].attr,
      element.value[index].value
    );
  });
};

export default move;
