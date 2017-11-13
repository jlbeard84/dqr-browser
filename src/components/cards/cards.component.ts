import { Component, OnInit } from '@angular/core';
import { Card, CardsService } from '../../core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
    public title = 'Cards';
    public cards: Card[] = [];

    constructor(
        private cardsService: CardsService) {
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
        return `./assets/cards/${card.id}.png`;
    }
}
