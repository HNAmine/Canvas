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
var RectComponent = (function () {
    function RectComponent(canvasService) {
        this.canvasService = canvasService;
        this.rects = [];
        this.newRect = new Rect(0, 0, 0, 0);
    }
    RectComponent.prototype.drawRect = function (rect) {
        this.canvasService.drawRect(rect);
    };
    RectComponent.prototype.addRect = function () {
        this.rects.push(this.newRect);
        this.newRect = new Rect(0, 0, 0, 0);
    };
    RectComponent.prototype.removeRect = function (rect) {
        var index = this.rects.indexOf(rect);
        if (index > -1) {
            this.rects.splice(index, 1);
        }
    };
    RectComponent.prototype.updateRect = function (rect) {
        rect.update = true;
    };
    RectComponent.prototype.updateRectV = function (rect) {
        rect.update = false;
    };
    RectComponent.prototype.drawAllRect = function () {
        var _this = this;
        this.rects.forEach(function (rect) {
            _this.drawRect(rect);
        });
    };
    RectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rect',
            templateUrl: "rect.component.html"
        }), 
        __metadata('design:paramtypes', [canvas_service_1.CanvasService])
    ], RectComponent);
    return RectComponent;
}());
exports.RectComponent = RectComponent;
var Rect = (function () {
    function Rect(x, y, long, lar) {
        this.x = x;
        this.y = y;
        this.lar = lar;
        this.long = long;
    }
    return Rect;
}());
exports.Rect = Rect;
//# sourceMappingURL=rect.component.js.map