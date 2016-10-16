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
var CanvasService = (function () {
    function CanvasService() {
        this.db = openDatabase('mydb', '1.0', 'my first database', 2 * 1024 * 1024);
        this.db.transaction(function (tx) {
            tx.executeSql('CREATE TABLE history (id UNIQUE, text)');
        });
    }
    CanvasService.prototype.addCircle = function () {
    };
    CanvasService.prototype.clear = function () {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 1000, 1000);
    };
    CanvasService.prototype.drawRect = function (rect) {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.rect(rect.x, rect.y, rect.lar, rect.long);
        ctx.stroke();
        var txt = "new Rect (" + rect.x + "," + rect.y + ") lar : " + rect.lar + " long : " + rect.long;
        this.db.transaction(function (tx) {
            tx.executeSql('INSERT INTO history (text) VALUES ("' + txt + '")');
        });
    };
    CanvasService.prototype.drawCerc = function (cerc) {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        //ctx.beginPath();
        ctx.arc(cerc.x1, cerc.y1, cerc.x2, cerc.y2, cerc.r);
        ctx.stroke();
        var txt = "new Cercl (" + cerc.x1 + "," + cerc.y1;
        this.db.transaction(function (tx) {
            tx.executeSql('INSERT INTO history (text) VALUES ("' + txt + '")');
        });
    };
    CanvasService.prototype.drawLine = function (line) {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x1, line.y2);
        ctx.stroke();
        var txt = "new Line Start(" + line.x1 + "," + line.y1 + ") End(" + line.x2 + "," + line.y2 + ")";
        this.db.transaction(function (tx) {
            tx.executeSql('INSERT INTO history (text) VALUES ("' + txt + '")');
        });
    };
    CanvasService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CanvasService);
    return CanvasService;
}());
exports.CanvasService = CanvasService;
//# sourceMappingURL=canvas.service.js.map