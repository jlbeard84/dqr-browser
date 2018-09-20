import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Base } from '../../core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends Base.DQRBasePage {

  public pageTitle: string = "Home";

  constructor(public navCtrl: NavController) {
    super();
  }
}
