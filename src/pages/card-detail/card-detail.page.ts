import { Component } from "@angular/core";
import { DQRBasePage } from "../../core/base";
import { CardsService } from "../../core/services";
import { DQRCard } from "../../core/models";
import { NavParams, NavController } from "ionic-angular";

@Component({
    selector: 'page-card-detail',
    templateUrl: 'card-detail.page.html'
  })
export class CardDetailPage extends DQRBasePage {

    public detailCard: DQRCard;

    private _pageTitle: string;

    public get pageTitle(): string {
        return this._pageTitle;
    }

    constructor(
        private navController: NavController,
        private navParams: NavParams,
        private cardsService: CardsService) { 
        super();

        if (!this.navParams || !this.navParams.data || !this.navParams.data.card) {
            this.navController.pop();
        }

        this.detailCard = this.navParams.data.card;
        this._pageTitle = this.detailCard.enTitle;
    }

    public getImagePath(card: DQRCard): string {
        return this.cardsService.getImagePath(card);
    }
}