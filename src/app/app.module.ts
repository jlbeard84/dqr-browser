import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DqrbUiModule } from '../core/ui/dqrb-ui.module';

import * as AppComponents from '../components';

@NgModule({
  declarations: [
    AppComponent,
    AppComponents.CardsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    DqrbUiModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
