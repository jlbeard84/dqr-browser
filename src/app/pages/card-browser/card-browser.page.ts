import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from '@ionic/angular';

import { DQRBasePage } from '../../base';
import { CardsService } from '../../services';
import { DQRCard, Deck, CardFilter } from '../../models';
import { CardDetailPage } from '../card-detail/card-detail.page';
import { CardFilterPage } from '../card-filter/card-filter.page';

@Component({
    selector: 'page-card-browser',
    templateUrl: 'card-browser.page.html',
    styleUrls: [ 'card-browser.page.scss' ]
  })
export class CardBrowserPage extends DQRBasePage {

    public static ROUTE: string = 'card-browser';
    public static PAGE_NAME: string = 'DQ Rivals Card Browser';

    public showImages: boolean = false;
    public showDescriptions: boolean = false;
    public searchQuery: string = '';

    public cardMasterList: DQRCard[] = [];
    public cards: DQRCard[] = [];
    public filter: CardFilter = new CardFilter();

    public get pageTitle(): string {
        return CardBrowserPage.PAGE_NAME;
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
        private modalController: ModalController) {

        super();

        this.cardsService.getCards().subscribe((cards: DQRCard[]) => {
            this.cardMasterList = [...cards];
            this.cards = cards;
        });
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

        if (!searchValue || searchValue.trim() === '') {
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

    public async openFilter(): Promise<void> {
        const filterModal = await this.modalController.create({
            component: CardFilterPage,
            componentProps: {
                'filter': this.filter
            }
        });

        filterModal.onDidDismiss().then((returnData: any) => {
            if (returnData && returnData.data && returnData.data.filter) {
                this.filter = returnData.data.filter;
                this.runFilter();
            }
        });

        await filterModal.present();
    }

    public removeCostFilter(): void {
        if (this.filter) {
            this.filter.cost = [];
        }

        this.runFilter();
    }

    public openDetail(card: DQRCard): void {
        this.cardsService.setCurrentCard(card);
        this.navController.navigateForward(CardDetailPage.ROUTE);
    }

    public getImagePath(card: DQRCard): string {
        return this.cardsService.getImagePath(card);
    }

    public onSearchCards(event: any): void {
        this.searchQuery = event.target.value;
        this.runFilter();
    }

    public onResetSearch(): void {
        this.searchQuery = '';
        this.runFilter();
    }
}
