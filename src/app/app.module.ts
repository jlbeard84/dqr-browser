import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DqrbUiModule, CardsService } from '../core';
import * as AppComponents from '../components';


@NgModule({
  declarations: [
    AppComponent,
    AppComponents.CardsComponent,
    AppComponents.SingleCardComponent
  ],
  entryComponents: [
    AppComponents.SingleCardComponent 
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    DqrbUiModule,
    HttpClientModule
  ],
  providers: [
    CardsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
