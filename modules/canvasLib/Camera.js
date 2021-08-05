import Vec2 from "./Vec2.js";
export default function Camera(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
    this.pos = new Vec2();
    this.rotation = 0;
    this.scale = 1;
    this.gridSize = 10;
    this.aspect = this.width / this.height;
    this.render = function(ctx, objs, renderGrid = false) {
        ctx.clearRect(0, 0, this.width, this.height);
        ctx.save();
        ctx.translate(this.pos.x + this.width/2, this.pos.y + this.height/2);
        ctx.rotate(this.rotation);
        ctx.scale(this.scale, this.scale);
        if (renderGrid) {
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 1;
            ctx.beginPath();
            let xStart = -this.pos.x-this.width/2+this.pos.x%this.gridSize;
            let xEnd = this.width*this.scale*2-this.pos.x;
            let yStart = -this.pos.y-this.height/2+this.pos.y%this.gridSize;
            let yEnd = this.height*this.scale*2-this.pos.y-this.pos.y%this.gridSize;
            for (let x = xStart; x < xEnd; x += this.gridSize) {
                console.log(x);
                ctx.moveTo(x, yStart);
                ctx.lineTo(x, yEnd);
            }
            for (let y = -this.pos.y-this.height/2; y < this.height*this.scale*2-this.pos.y; y += this.gridSize) {
                ctx.moveTo(xStart, y);
                ctx.lineTo(xEnd, y);
            }
            ctx.stroke();
        }
        objs.forEach(obj => {
            obj.render(ctx);
        });
        ctx.restore();
    }
    this.pan = (x, y) => {
        this.pos.x += x;
        this.pos.y += y;
    };
}