import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { DQRApp } from './app.component';
import { CardClassPipe, CardTypePipe } from "../core/pipes";
import { CardsService, DeckService } from "../core/services";
import * as Pages from "../pages";

@NgModule({
  declarations: [
    DQRApp,
    Pages.HomePage,
    Pages.CardBrowserPage,
    CardClassPipe,
    CardTypePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(DQRApp),
    HttpClientModule
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    DQRApp,
    Pages.HomePage,
    Pages.CardBrowserPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CardsService,
    DeckService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
