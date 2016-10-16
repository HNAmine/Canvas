import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {RectComponent} from "./rect/rect.component";
import {CanvasService} from "./canvas.service";
import {CercComponent} from "./cerc/cerc.component";
import {LineComponent} from "./line/line.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, RectComponent, CercComponent,LineComponent],
    bootstrap: [AppComponent],
    providers: [CanvasService]
})
export class AppModule {
}