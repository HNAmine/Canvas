import {Component} from '@angular/core';
import {CanvasService} from "../canvas.service";
@Component({
    moduleId: module.id,
    selector: 'rect',
    templateUrl: "rect.component.html"
})
export class RectComponent {
    rects: Rect[] = [];
    newRect: Rect = new Rect(0, 0, 0, 0);

    constructor(private canvasService: CanvasService) {

    }

    drawRect(rect: Rect) {
        this.canvasService.drawRect(rect);
    }

    addRect() {
        this.rects.push(this.newRect);
        this.newRect = new Rect(0, 0, 0, 0);
    }

    removeRect(rect) {
        var index = this.rects.indexOf(rect);
        if (index > -1) {
            this.rects.splice(index, 1);
        }
    }

    updateRect(rect) {
        rect.update = true;
    }

    updateRectV(rect) {
        rect.update = false;
    }

    drawAllRect() {
        this.rects.forEach(rect => {
            this.drawRect(rect);
        })
    }
}


export class Rect {
    x: number;
    y: number;
    long: number;
    lar: number;

    constructor(x, y, long, lar) {
        this.x = x;
        this.y = y;
        this.lar = lar;
        this.long = long;
    }
}