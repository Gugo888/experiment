import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormatPipe } from './format.pipes';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FormatPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
