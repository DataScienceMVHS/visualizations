import CObject from "./CObject.js";
export default function Dot(x, y) {
    CObject.call(this, x, y);
    this.radius = 10;
    this.color = "#ff0000";
    this.strokeColor = "#000000";
    this.strokeWidth = 1;
    this.type = "dot";
    this.name = "Dot";
    this.draw = function (ctx) {
        ctx.beginPath();
        ctx.arc(...this.pos.toArray(), this.radius, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.lineWidth = this.strokeWidth;
        ctx.strokeStyle = this.strokeColor;
        ctx.stroke();
    }
}