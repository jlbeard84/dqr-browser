import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Card, CardsService, DeckService } from '../../core';
import { SingleCardComponent } from '../single-card/single-card.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
    public title = 'Cards';
    public cards: Card[] = [];

    constructor(
        private dialog: MatDialog,
        private cardsService: CardsService,
        private deckService: DeckService) {
    }

    public ngOnInit(): void {

        this
            .cardsService
            .getCards()
            .subscribe((cards) => {
                this.cards = cards;
            });
    }

    public getImagePath(card: Card): string {
        return this.cardsService.getImagePath(card);
    }

    public addToDeck(card: Card): void {
        this.deckService.addCard(card);
    }

    public openModal(card: Card): void {

        const dialogRef: MatDialogRef<SingleCardComponent> = this
            .dialog
            .open(
                SingleCardComponent, {
                width: '100%',
                height: '100%',
                data: {
                    card: card
                }
            });
    }
}
