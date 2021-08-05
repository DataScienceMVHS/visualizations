import Camera from "./Camera.js";
/**
 * @var {HTMLCanvasElement} canvas
 * */
export default function CanvasUtils(canvas=null) {
    if (canvas) {
        this.canvas = canvas;
    }
    else {
        this.canvas = document.createElement('canvas');
    }
    this.context = this.canvas.getContext('2d');
    this.camera = new Camera(this.canvas);
    this.objs = [];
    this.panning = false;
    this.render = ()=>{
        this.camera.render(this.context, this.objs);
    };
    this.addObject = (obj)=>{
        this.objs.push(obj);
        this.render();
    };
    this.canvas.addEventListener('pointerdown', (e)=>{
        this.panning = true;
        this.panningX = e.clientX;
        this.panningY = e.clientY;
    });
    this.canvas.addEventListener('pointermove', (e)=>{
        if (this.panning) {
            this.camera.pan(e.clientX - this.panningX, e.clientY - this.panningY);
            this.panningX = e.clientX;
            this.panningY = e.clientY;
            this.camera.render(this.context, this.objs, true);
        }
    });
    this.canvas.addEventListener('pointerup', (e)=>{
        this.panning = false;
    });
    this.canvas.addEventListener('pointercancel', (e)=>{
        this.panning = false;
    });
    this.canvas.addEventListener('pointerleave', e=>{
        this.panning = false;
    });
    return this;
}