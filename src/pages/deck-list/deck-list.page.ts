import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { DQRBasePage } from '../../core/base';
import { DeckService } from '../../core/services';
import { Deck } from '../../core/models';

import { CardBrowserPage } from '../card-browser/card-browser.page';

@Component({
  selector: 'page-deck-list',
  templateUrl: 'deck-list.page.html'
})
export class DeckListPage extends DQRBasePage {

  public static PAGE_NAME: string = "Deck List";

  public decks: Deck[] = [];

  public get pageTitle(): string {
    return DeckListPage.PAGE_NAME;
  }

  constructor(
    private navController: NavController,
    private deckService: DeckService,
    private alertController: AlertController) {

    super();

    this.deckService.decks.subscribe((decks) => {
      this.decks = decks;
    });
  }

  public selectDeck(deck: Deck): void {
    this.navController.push(
      CardBrowserPage,
      {
        deck: deck
      }
    );
  }

  public addDeck(): void {
    const newDeckAlert = this.alertController.create({
      title: "Deck Name",
      message: "Enter a name for the deck",
      inputs: [
        {
          name: "deckName",
          placeholder: "Deck Name"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Confirm",
          handler: (data) => {
            if (!data || !data.deckName) {
              //do nothing
              return false;
            } else {
              const newDeck = this.deckService.addDeck(data.deckName);
              this.selectDeck(newDeck);
              return true;
            }
          }
        }
      ]
    });

    newDeckAlert.present();
  }
}
