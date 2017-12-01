import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Services
import { GitService } from './git/git.service';
//Components
import { AppComponent } from './app.component';
import { GitComponent } from './git/git.component';
//Modules
import {HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    GitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
