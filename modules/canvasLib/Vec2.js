export default function Vec2(x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.scale = (multip) =>
    {
        return new Vec2(this.x * multip, this.y * multip);
    }
    this.add = (vec) =>
    {
        return new Vec2(this.x + vec.x, this.y + vec.y);
    }
    this.sub = (vec) =>
    {
        return new Vec2(this.x - vec.x, this.y - vec.y);
    }
    this.mul = (vec) =>
    {
        return new Vec2(this.x * vec.x, this.y * vec.y);
    }
    this.div = (vec) =>
    {
        return new Vec2(this.x / vec.x, this.y / vec.y);
    }
    this.dot = (vec) =>
    {
        return this.x * vec.x + this.y * vec.y;
    }
    this.cross = (vec) =>
    {
        return this.x * vec.y - this.y * vec.x;
    }
    this.length = () =>
    {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    this.normalize = () =>
    {
        var len = this.length();
        if (len > 0) {
            return this.scale(1 / len);
        }
        return [0, 0];
    }
    this.rotate = (angle) =>
    {
        var c = Math.cos(angle);
        var s = Math.sin(angle);
        return new Vec2(this.x * c - this.y * s, this.x * s + this.y * c);
    }
    this.rotateDeg = (angle) =>
    {
        return this.rotate(angle * Math.PI / 180);
    }
    this.toString = () =>
    {
        return "Vec2(" + this.x + ", " + this.y + ")";
    }
    this.toArray = () =>
    {
        return [this.x, this.y];
    }
    this.copy = (vec) =>
    {
        this.x = vec.x;
        this.y = vec.y;
    }
    this.clone = () =>
    {
        return new Vec2(this.x, this.y);
    }
    this.set = (x, y) =>
    {
        this.x = x;
        this.y = y;
        return this;
    }
}