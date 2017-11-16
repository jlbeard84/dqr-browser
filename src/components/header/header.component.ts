import { Component, ViewEncapsulation } from '@angular/core';

import { DeckService } from '../../core';

@Component({
encapsulation: ViewEncapsulation.None,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    public deckCardCount: number = 0;

    constructor(
        private deckService: DeckService) {

        this.deckCardCount = this.deckService.deck.length;

        this.deckService.deckUpdated$.subscribe((count: number) => {
            this.deckCardCount = count;
        });
    }
}
