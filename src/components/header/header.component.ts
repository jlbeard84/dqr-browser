import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { DeckBrowserComponent } from '../deck-browser/deck-browser.component';
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
        private dialog: MatDialog,
        private deckService: DeckService) {

        this.deckCardCount = this.deckService.deck.length;

        this.deckService.deckUpdated$.subscribe((count: number) => {
            this.deckCardCount = count;
        });
    }

    public openDeck(): void {
        const dialogRef: MatDialogRef<DeckBrowserComponent> = this
            .dialog
            .open(
                DeckBrowserComponent, {
                    width: '100%',
                    height: '100%',
            });
    }
}
