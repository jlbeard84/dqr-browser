import { Component, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Card, DeckService } from '../../core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-deck-browser',
  templateUrl: './deck-browser.component.html',
  styleUrls: ['./deck-browser.component.scss']
})
export class DeckBrowserComponent {

    public deck: Card[];
    public deckData: MatTableDataSource<Card>;

    public displayedColumns: string[] = [
        'enTitle',
        'jpTitle',
        'cost',
        'attack',
        'hp',
        'remove'
    ];

    constructor(
        private deckService: DeckService) {

        this.deck = deckService.deck;
        this.deckData = new MatTableDataSource(this.deck);
    }

    public applyFilter(filterValue: string): void {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.deckData.filter = filterValue;
    }
}
