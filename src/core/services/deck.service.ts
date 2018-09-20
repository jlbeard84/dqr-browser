import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { DQRCard } from '../models';

@Injectable()
export class DeckService {

    public deck: DQRCard[] = [];

    private deckUpdatedSource = new Subject<number>();
    public deckUpdated$ = this.deckUpdatedSource.asObservable();

    public addCard(card: DQRCard) {
        this.deck.push(card);
        this.deckUpdatedSource.next(this.deck.length);
    }

    public removeCard(index: number) {
        this.deck.splice(index, 1);
        this.deckUpdatedSource.next(this.deck.length);
    }
}
