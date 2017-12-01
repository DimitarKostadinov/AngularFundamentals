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


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthComponent,
    PokeTableComponent,
    TableElementsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
  ],
  providers: [AuthService,
    PokeSearchService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
      
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
