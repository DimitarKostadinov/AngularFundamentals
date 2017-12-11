import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {HomeComponent}  from './main/submodules/home/home.component';
import { GreenComponent } from './main/submodules/green/green.component';
import { BlueComponent } from './main/submodules/blue/blue.component';
import { RedComponent } from './main/submodules/red/red.component';
import { OrangeComponent } from './main/submodules/orange/orange.component';
import { AttackComponent } from './main/submodules/attack/attack.component';
import { AuthGuard } from './services/auth.guard';
import { TargetGuard } from './services/target.guard';
import { ErrorComponent } from './main/submodules/error/error.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GreenComponent,
    BlueComponent,
    RedComponent,
    OrangeComponent,
    AttackComponent,
    ErrorComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    TargetGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
