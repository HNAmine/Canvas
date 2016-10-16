import {Component} from '@angular/core';
import {CanvasService} from "./canvas.service";
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: "app.component.html"
})
export class AppComponent {

    constructor(private canvasService: CanvasService) {
    }

    clear() {
        this.canvasService.clear();
    }

}