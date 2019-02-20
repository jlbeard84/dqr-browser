import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DQRCard } from '../models';

const cardDataPath: string = './assets/data/cards.json';

@Injectable({
    providedIn: 'root'
})
export class CardsService {

    private _currentCard: DQRCard;
    public get currentCard(): DQRCard { return this._currentCard; }

    constructor(
        private http: HttpClient) {
    }

    public setCurrentCard(card: DQRCard): void {
        this._currentCard = card;
    }

    public getCards(): Observable<DQRCard[]> {

        return this
            .http
            .get<DQRCard[]>(cardDataPath);
    }

    public getImagePath(card: DQRCard): string {
        if (card.id) {
            return `./assets/cards/${card.id}.png`;
        }

        return `./assets/common/standard-back.png`;
    }
}
