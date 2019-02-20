import { Component } from "@angular/core";
import { NavController, NavParams, ToastController, ModalController } from "ionic-angular";

import { DQRBasePage } from "../../core/base";
import { CardsService, DeckService } from "../../core/services";
import { DQRCard, Deck, CardFilter } from "../../core/models";
import { CardDetailPage } from "../card-detail/card-detail.page";
import { CardFilterPage } from "../card-filter/card-filter.page";

@Component({
    selector: 'page-card-browser',
    templateUrl: 'card-browser.page.html'
  })
export class CardBrowserPage extends DQRBasePage {

    public static PAGE_NAME: string = "Card Browser";
    public static ADD_CARD_DECK_NAME: string = "Add Cards"
    public showImages: boolean = false;
    public searchQuery: string = "";

    public cardMasterList: DQRCard[] = [];
    public cards: DQRCard[] = [];
    public deck: Deck = null;
    public filter: CardFilter = new CardFilter();

    public get pageTitle(): string {
        if (!this.deck) {
            return CardBrowserPage.PAGE_NAME;
        }

        return `${this.deck.name} - ${CardBrowserPage.ADD_CARD_DECK_NAME}`;
    }

    public get showFilterObjects(): boolean {
        if (!this.filter) {
            return false;
        }

        return (
            this.filter.cost.length > 0 ||
            this.filter.attack.length > 0 ||
            this.filter.class.length > 0 ||
            this.filter.hp.length > 0 ||
            this.filter.type.length > 0
        );
    }

    constructor(
        private cardsService: CardsService,
        private navController: NavController,
        private navParams: NavParams,
        private deckService: DeckService,
        private toastController: ToastController,
        private modalController: ModalController) { 

        super();

        if (this.navParams && this.navParams.data && this.navParams.data.deck) {
            this.deck = this.navParams.data.deck;
        }

        this.cardsService.getCards().subscribe((cards: DQRCard[]) => {
            this.cardMasterList = [...cards];
            this.cards = cards;
        })
    }

    public runFilter(): void {
        this.cards = [...this.cardMasterList];
        
        if (!this.filter && !this.searchQuery) {
            return;
        }

        if (this.filter.cost && this.filter.cost.length > 0) {
            this.cards = this.cards.filter((card: DQRCard) => {
                return (this.filter.cost.indexOf(card.cost) > -1);
            });
        }

        // do search
        let searchValue: string = this.searchQuery;

        if (!searchValue || searchValue.trim() === "") {
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

    public openFilter(): void {
        const filterModal = this.modalController.create(CardFilterPage, {
            filter: this.filter
        });

        filterModal.onDidDismiss((returnData) => {
            if (returnData && returnData.filter) {
                this.filter = returnData.filter;
                this.runFilter();
            }
        });

        filterModal.present();
    }

    public removeCostFilter(): void {
        if (this.filter) {
            this.filter.cost = [];
        }

        this.runFilter();
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

    public onSearchCards(event: any): void {
        this.searchQuery = event.target.value;
        this.runFilter();
    }

    public onResetFilter(): void {
        this.searchQuery = "";
        this.runFilter();
    }
}