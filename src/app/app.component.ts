import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as Pages from "../pages";
import { Base } from '../core';

@Component({
  templateUrl: 'app.html'
})
export class DQRApp {

  @ViewChild(Nav) nav: Nav;

  public appTitle: string;
  public rootPage: any = Pages.HomePage;
  public pages: Array<{title: string, component: any}> = [];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.appTitle = Base.DQRBasePage.APP_NAME;
    this.populatePages();

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  public openPage(page: { title: string, component: any }) {
    this.nav.setRoot(page.component);
  }

  private populatePages() {  
    this.pages = [
      {
        title: Pages.HomePage.PAGE_NAME,
        component: Pages.HomePage
      },
      {
        title: Pages.CardBrowserPage.PAGE_NAME,
        component: Pages.CardBrowserPage
      }
    ]
  }
}

