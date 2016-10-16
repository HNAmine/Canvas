import {Component} from '@angular/core';
import {CanvasService} from "../canvas.service";

@Component({
    moduleId: module.id,
    selector: 'line',
    templateUrl: "line.component.html"
})
export class LineComponent {
    lines: Line[] = [];
    newLine: Line = new Line(0, 0, 0, 0);

    constructor(private canvasService: CanvasService) {
    }

    drawLine(line: Line) {
        this.canvasService.drawLine(line);
    }

    addLine() {
        this.lines.push(this.newLine);
        this.newLine = new Line(0, 0, 0, 0);
    }

    removeLine(line) {
        var index = this.lines.indexOf(line);
        if (index > -1) {
            this.lines.splice(index, 1);
        }
    }

    updateLine(line) {
        line.update = true;
    }

    updateLineV(line) {
        line.update = false;
    }

    drawAllLine() {
        this.lines.forEach(line => {
            this.drawLine(line);
        })
    }
}

export class Line {
    x1: number;
    y1: number;
    x2: number;
    y2: number;

    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
}