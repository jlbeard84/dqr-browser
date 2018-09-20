import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Base } from '../../core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends Base.DQRBasePage {

  public static PAGE_NAME: string = "Home";

  public get pageTitle(): string {
    return HomePage.PAGE_NAME;
  }

  constructor(public navCtrl: NavController) {
    super();
  }
}
