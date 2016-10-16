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
var CercComponent = (function () {
    function CercComponent(canvasService) {
        this.canvasService = canvasService;
        this.cercs = [];
        this.newCerc = new Cerc(0, 0, 0, 0, 0);
    }
    CercComponent.prototype.drawCerc = function (cerc) {
        this.canvasService.drawCerc(cerc);
    };
    CercComponent.prototype.addCerc = function () {
        this.cercs.push(this.newCerc);
        this.newCerc = new Cerc(0, 0, 0, 0, 0);
    };
    CercComponent.prototype.removeCerc = function (cerc) {
        var index = this.cercs.indexOf(cerc);
        if (index > -1) {
            this.cercs.splice(index, 1);
        }
    };
    CercComponent.prototype.updateCerc = function (cerc) {
        cerc.update = true;
    };
    CercComponent.prototype.updateCercV = function (cerc) {
        cerc.update = false;
    };
    CercComponent.prototype.drawAllCerc = function () {
        var _this = this;
        this.cercs.forEach(function (cerc) {
            _this.drawCerc(cerc);
        });
    };
    CercComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cerc',
            templateUrl: "cerc.component.html"
        }), 
        __metadata('design:paramtypes', [canvas_service_1.CanvasService])
    ], CercComponent);
    return CercComponent;
}());
exports.CercComponent = CercComponent;
var Cerc = (function () {
    function Cerc(x1, y1, x2, y2, r) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.r = r;
    }
    return Cerc;
}());
exports.Cerc = Cerc;
//# sourceMappingURL=cerc.component.js.map