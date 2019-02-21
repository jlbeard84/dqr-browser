import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { DQRBasePage } from '../../base';
import { CardsService } from '../../services';
import { DQRCard } from '../../models';

@Component({
    selector: 'page-card-detail',
    templateUrl: 'card-detail.page.html',
    styleUrls: [ 'card-detail.page.scss' ]
  })
export class CardDetailPage extends DQRBasePage implements OnInit {

    public static ROUTE: string = 'card-detail';

    public showDetailCard: boolean = false;
    public detailCard: DQRCard;

    private _pageTitle: string;

    public get pageTitle(): string {
        return this._pageTitle;
    }

    constructor(
        private navController: NavController,
        private cardsService: CardsService) {
        super();
    }

    public ngOnInit(): void {
        if (!this.cardsService.currentCard) {
            this.navController.navigateBack('card-browser');
            return;
        }

        this.detailCard = this.cardsService.currentCard;
        this._pageTitle = this.detailCard.primaryTitle;
        this.showDetailCard = true;
    }

    public getImagePath(card: DQRCard): string {
        return this.cardsService.getImagePath(card);
    }
}
