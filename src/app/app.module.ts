import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import * as AppComponents from '../components';
import { AppComponent } from './app.component';

import {
  DqrbUiModule,
  CardsService,
  CardClass,
  CardClassPipe,
  CardTypePipe,
  DeckService
} from '../core';

@NgModule({
  declarations: [
    AppComponent,
    AppComponents.CardsComponent,
    AppComponents.HeaderComponent,
    AppComponents.SingleCardComponent,
    AppComponents.DeckBrowserComponent,
    CardClassPipe,
    CardTypePipe
  ],
  entryComponents: [
    AppComponents.SingleCardComponent,
    AppComponents.DeckBrowserComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    DqrbUiModule,
    HttpClientModule
  ],
  providers: [
    CardsService,
    DeckService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
