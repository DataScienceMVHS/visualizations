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
        if (renderGrid) {
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.save()
            ctx.globalAlpha = 0.5;
            ctx.translate(this.width / 2, this.height / 2);
            ctx.rotate(this.rotation);
            let xStart =  this.pos.x%(this.gridSize*this.scale) - this.gridSize - this.width/2 - this.width*Math.sin(this.rotation);
            let xEnd = this.width/2 + this.width*Math.cos(this.rotation);
            let yStart = this.pos.y%(this.gridSize*this.scale) - this.gridSize - this.height/2 - this.height*Math.cos(this.rotation);
            let yEnd = this.height/2 + this.height*Math.sin(this.rotation);
            for (let x = xStart; x < xEnd; x += this.gridSize*this.scale) {
                ctx.moveTo(x, yStart);
                ctx.lineTo(x, yEnd);
            }
            for (let y = yStart; y < yEnd; y += this.gridSize*this.scale) {
                ctx.moveTo(xStart, y);
                ctx.lineTo(xEnd, y);
            }
            ctx.stroke();
            ctx.restore();
        }
        ctx.save();
        ctx.translate(this.pos.x + this.width/2, this.pos.y + this.height/2);
        ctx.scale(this.scale, this.scale);
        ctx.rotate(this.rotation);
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