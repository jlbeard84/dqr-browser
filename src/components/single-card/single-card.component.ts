import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Card, CardsService } from '../../core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent {

    public title = 'Card';
    public card: Card;

    constructor(
        public dialogRef: MatDialogRef<SingleCardComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private cardsService: CardsService) {

        if (data && data.card) {
            this.card = data.card as Card;
        }
    }

    public getImagePath(card: Card): string {
        return this.cardsService.getImagePath(card);
    }
}
