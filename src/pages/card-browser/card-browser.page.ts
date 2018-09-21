import { Component } from "@angular/core";
import { NavController, NavParams, ToastController } from "ionic-angular";

import { DQRBasePage } from "../../core/base";
import { CardsService, DeckService } from "../../core/services";
import { DQRCard, Deck } from "../../core/models";
import { CardDetailPage } from "../card-detail/card-detail.page";

@Component({
    selector: 'page-card-browser',
    templateUrl: 'card-browser.page.html'
  })
export class CardBrowserPage extends DQRBasePage {

    public static PAGE_NAME: string = "Card Browser";
    public static ADD_CARD_DECK_NAME: string = "Add Cards"
    public showImages: boolean = true;

    public cardMasterList: DQRCard[] = [];
    public cards: DQRCard[] = [];
    public deck: Deck = null;

    public get pageTitle(): string {
        if (!this.deck) {
            return CardBrowserPage.PAGE_NAME;
        }

        return `${this.deck.name} - ${CardBrowserPage.ADD_CARD_DECK_NAME}`;
    }

    constructor(
        private cardsService: CardsService,
        private navController: NavController,
        private navParams: NavParams,
        private deckService: DeckService,
        private toastController: ToastController) { 

        super();

        if (this.navParams && this.navParams.data && this.navParams.data.deck) {
            this.deck = this.navParams.data.deck;
        }

        this.cardsService.getCards().subscribe((cards: DQRCard[]) => {
            this.cardMasterList = [...cards];
            this.cards = cards;
        })
    }

    public openDetail(card: DQRCard): void {
        this.navController.push(
            CardDetailPage,
            {
                card: card
            });
    }

    public addToDeck(card: DQRCard): void {
        this.deckService.addCard(
            this.deck,
            card);
        
        const toast = this.toastController.create({
            message: `${card.enTitle} added to deck`,
            duration: 1500,
            position: "top"
        });

        toast.present();
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