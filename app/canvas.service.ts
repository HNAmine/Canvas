import {Injectable} from '@angular/core';
import {Rect} from "./rect/rect.component";
import {Cerc} from "./cerc/cerc.component";
import {Line} from "./line/line.component";


@Injectable()
export class CanvasService {
    db = openDatabase('mydb', '1.0', 'my first database', 2 * 1024 * 1024);


    constructor() {
        this.db.transaction(function (tx) {
            tx.executeSql('CREATE TABLE history (id UNIQUE, text)');
        });
    }

    addCircle() {

    }

    clear() {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 1000, 1000);
    }

    drawRect(rect: Rect) {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.rect(rect.x, rect.y, rect.lar, rect.long);
        ctx.stroke();
        var txt = "new Rect (" + rect.x + "," + rect.y + ") lar : " + rect.lar + " long : " + rect.long;
        this.db.transaction(function (tx) {
            tx.executeSql('INSERT INTO history (text) VALUES ("' + txt + '")');
        });
    }

    drawCerc(cerc: Cerc) {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        //ctx.beginPath();
        ctx.arc(cerc.x1, cerc.y1, cerc.x2, cerc.y2, cerc.r);
        ctx.stroke();
        var txt = "new Cercl (" + cerc.x1 + "," + cerc.y1;
        this.db.transaction(function (tx) {
            tx.executeSql('INSERT INTO history (text) VALUES ("' + txt + '")');
        });
    }

    drawLine(line: Line) {
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
    }
}
