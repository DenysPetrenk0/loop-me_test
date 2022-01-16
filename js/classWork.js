/** @format */

const classWork = (elem, newClass) => {
  if (!elem.classList.contains(newClass)) {
    const oldClass = elem.className;
    elem.classList.remove(oldClass);
    elem.clientWidth;
    elem.classList.add(newClass);
  }
};

export default classWork;
