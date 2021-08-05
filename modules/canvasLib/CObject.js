import Vec2 from "./Vec2.js";

export default function CObject(x, y, draw) {
    
    /**
     * overridable method to draw the object
     * */
    this.pos = new Vec2(x, y);
    this.draw = draw;
    this.render = (ctx) =>
    {
        ctx.save()
        ctx.translate(...this.pos.toArray())
        this.draw(ctx)
        ctx.restore()
    }
}