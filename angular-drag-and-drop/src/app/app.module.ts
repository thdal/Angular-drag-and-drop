import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DragAndDropComponentComponent } from './feature/drag-and-drop-component/drag-and-drop-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DragAndDropComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
