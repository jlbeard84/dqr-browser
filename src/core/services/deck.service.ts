import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Card } from '../';

@Injectable()
export class DeckService {

    public deck: Card[] = [];

    private deckUpdatedSource = new Subject<number>();
    public deckUpdated$ = this.deckUpdatedSource.asObservable();

    public addCard(card: Card) {
        this.deck.push(card);
        this.deckUpdatedSource.next(this.deck.length);
    }

    public removeCard(index: number) {
        this.deck.splice(index, 1);
        this.deckUpdatedSource.next(this.deck.length);
    }
}
