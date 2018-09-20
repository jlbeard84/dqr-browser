import { Component } from "@angular/core";
import { Base } from "../../core";
import { CardsService } from "../../core/services";
import { DQRCard } from "../../core/models";

@Component({
    selector: 'page-card-browser',
    templateUrl: 'card-browser.page.html'
  })
export class CardBrowserPage extends Base.DQRBasePage {

    public static PAGE_NAME: string = "Card Browser";
    public cards: DQRCard[] = [];

    public get pageTitle(): string {
      return CardBrowserPage.PAGE_NAME;
    }

    constructor(
        private cardsService: CardsService) { 
        super();

        this.cardsService.getCards().subscribe((cards: DQRCard[]) => {
            this.cards = cards;
        })
    }
}