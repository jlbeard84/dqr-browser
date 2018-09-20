import { Component } from "@angular/core";
import { DQRBasePage } from "../../core/base";
import { CardsService } from "../../core/services";
import { DQRCard } from "../../core/models";

@Component({
    selector: 'page-card-browser',
    templateUrl: 'card-browser.page.html'
  })
export class CardBrowserPage extends DQRBasePage {

    public static PAGE_NAME: string = "Card Browser";
    public showImages: boolean = true;

    public cardMasterList: DQRCard[] = [];
    public cards: DQRCard[] = [];

    public get pageTitle(): string {
      return CardBrowserPage.PAGE_NAME;
    }

    constructor(
        private cardsService: CardsService) { 
        super();

        this.cardsService.getCards().subscribe((cards: DQRCard[]) => {
            this.cardMasterList = [...cards];
            this.cards = cards;
        })
    }

    public getImagePath(card: DQRCard): string {
        return this.cardsService.getImagePath(card);
    }

    public onFilterCards(event: any): void {

        this.cards = [...this.cardMasterList];

        let searchValue: string = event.target.value;

        if (!searchValue || searchValue.trim() === "") {
            this.onResetFilter();
            return;
        }

        searchValue = searchValue.toLowerCase();

        this.cards = this.cards.filter((card: DQRCard) => {
            return (
                (card.enTitle && card.enTitle.toLowerCase().indexOf(searchValue) > -1) || 
                (card.jpTitle && card.jpTitle.indexOf(searchValue) > -1)
            );
        });
    }

    public onResetFilter(): void {
        this.cards = [...this.cardMasterList];
    }
}