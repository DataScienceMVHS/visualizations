import CanvasUtils from "./modules/canvasLib/CanvasUtils.js";
import Dot from "./modules/canvasLib/Dot.js";
window.CanvasUtils = CanvasUtils;
const t = window;
t.cu = new CanvasUtils();
t.cu.addObject(new Dot(0, 0));
document.body.appendChild(t.cu.canvas);
t.cu.render();