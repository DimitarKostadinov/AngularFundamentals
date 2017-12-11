import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms'
import { DubCheck } from './validateName';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [DubCheck],
  bootstrap: [AppComponent]
})
export class AppModule { }
