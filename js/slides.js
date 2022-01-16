/** @format */

import { refsSlider } from "./refs.js";

const slide = refsSlider.slide;
let slides = refsSlider.slides;

const transition = "1.5s";

export let index = 1;

const firstSlide = slides[0].cloneNode(true);
const lastSlide = slides[slides.length - 1].cloneNode(true);

firstSlide.setAttribute("id", "first-slide");
lastSlide.setAttribute("id", "last-slide");

slide.append(firstSlide);
slide.prepend(lastSlide);

const slideWidth = slides[index].clientWidth;

const slideTransform = () => `translateX(${-slideWidth * index}px)`;
const getSlide = () => document.querySelectorAll(".slider__item");

slide.style.transform = slideTransform();

slide.addEventListener("transitionend", () => {
  slides = getSlide();

  if (slides[index].id === firstSlide.id) {
    slide.style.transition = "none";
    index = 1;
    slide.style.transform = slideTransform();
  }

  if (slides[index].id === lastSlide.id) {
    slide.style.transition = "none";
    index = slides.length - 2;
    slide.style.transform = slideTransform();
  }
});

export const moveNextSlide = () => {
  slides = getSlide();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transform = slideTransform();
  slide.style.transition = transition;
};

export const movePrevSlide = () => {
  slides = getSlide();
  if (index <= 0) return;
  index--;
  slide.style.transform = slideTransform();
  slide.style.transition = transition;
};
