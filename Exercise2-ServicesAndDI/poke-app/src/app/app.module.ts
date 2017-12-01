import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";


import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthService } from './services/auth/auth.service';

import { AuthInterceptor } from './interceptors/auth.interceptor';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { PokeSearchService } from './services/poke-search/poke-search.service';
import { TableElementsComponent } from './components/table-elements/table-elements.component';
import { FocusedComponent } from './components/focused/focused.component';
import { FocusService } from './services/focus/focus.service';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthComponent,
    PokeTableComponent,
    TableElementsComponent,
    FocusedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
  ],
  providers: [AuthService,
    PokeSearchService,
    FocusService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
      
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
