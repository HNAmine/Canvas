"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var canvas_service_1 = require("../canvas.service");
var LineComponent = (function () {
    function LineComponent(canvasService) {
        this.canvasService = canvasService;
        this.lines = [];
        this.newLine = new Line(0, 0, 0, 0);
    }
    LineComponent.prototype.drawLine = function (line) {
        this.canvasService.drawLine(line);
    };
    LineComponent.prototype.addLine = function () {
        this.lines.push(this.newLine);
        this.newLine = new Line(0, 0, 0, 0);
    };
    LineComponent.prototype.removeLine = function (line) {
        var index = this.lines.indexOf(line);
        if (index > -1) {
            this.lines.splice(index, 1);
        }
    };
    LineComponent.prototype.updateLine = function (line) {
        line.update = true;
    };
    LineComponent.prototype.updateLineV = function (line) {
        line.update = false;
    };
    LineComponent.prototype.drawAllLine = function () {
        var _this = this;
        this.lines.forEach(function (line) {
            _this.drawLine(line);
        });
    };
    LineComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'line',
            templateUrl: "line.component.html"
        }), 
        __metadata('design:paramtypes', [canvas_service_1.CanvasService])
    ], LineComponent);
    return LineComponent;
}());
exports.LineComponent = LineComponent;
var Line = (function () {
    function Line(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    return Line;
}());
exports.Line = Line;
//# sourceMappingURL=line.component.js.map