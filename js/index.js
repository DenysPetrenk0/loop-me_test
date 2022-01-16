/** @format */

import nextMove from "./next.js";
import prevMove from "./prev.js";
import { button } from "./refs.js";
import { handleTouchMove, handleTouchStart } from "./swipe.js";

button.right.addEventListener("click", nextMove);
button.left.addEventListener("click", prevMove);

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);
