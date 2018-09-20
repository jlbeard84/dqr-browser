import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { DQRApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Pipes, Services } from "../core";

@NgModule({
  declarations: [
    DQRApp,
    HomePage,
    Pipes.CardClassPipe,
    Pipes.CardTypePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(DQRApp)
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    DQRApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Services.CardsService,
    Services.DeckService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
