import {Component} from '@angular/core';
import {CanvasService} from "../canvas.service";

@Component({
    moduleId: module.id,
    selector: 'cerc',
    templateUrl: "cerc.component.html"
})
export class CercComponent {
    cercs: Cerc[] = [];
    newCerc: Cerc = new Cerc(0, 0, 0, 0,0);

    constructor(private canvasService: CanvasService) {

    }

    drawCerc(cerc: Cerc) {
        this.canvasService.drawCerc(cerc);
    }

    addCerc() {
        this.cercs.push(this.newCerc);
        this.newCerc = new Cerc(0, 0, 0, 0,0);
    }

    removeCerc(cerc) {
        var index = this.cercs.indexOf(cerc);
        if (index > -1) {
            this.cercs.splice(index, 1);
        }
    }

    updateCerc(cerc) {
        cerc.update = true;
    }

    updateCercV(cerc) {
        cerc.update = false;
    }

    drawAllCerc() {
        this.cercs.forEach(cerc => {
            this.drawCerc(cerc);
        })
    }
}

export class Cerc {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    r: number;

    constructor(x1, y1, x2, y2, r) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.r = r;
    }
}