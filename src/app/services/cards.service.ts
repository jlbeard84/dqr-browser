import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

import { DQRCard } from '../models';

const cardDataPath: string = './assets/data/cards.json';

@Injectable({
    providedIn: 'root'
})
export class CardsService {

    private _cardList: DQRCard[] = [];
    private _currentCard: DQRCard;
    public get currentCard(): DQRCard { return this._currentCard; }

    constructor(
        private http: HttpClient) {
    }

    public setCurrentCard(card: DQRCard): void {
        this._currentCard = card;
    }

    public async getCards(): Promise<DQRCard[]> {

        if (!this._cardList || this._cardList.length > 0) {
            return this._cardList;
        }

        const targetList: DQRCard[] = [];

        await this
            .http
            .get<DQRCard[]>(cardDataPath)
            .forEach((sourceCards: DQRCard[]) => {
                for (const sourceCard of sourceCards) {
                    targetList.push(DQRCard.clone(sourceCard));
                }
            });

        this._cardList = targetList;
        return this._cardList;
    }

    public getImagePath(card: DQRCard): string {
        if (card.id) {
            return `./assets/cards/${card.id}.png`;
        }

        return `./assets/common/standard-back.png`;
    }
}
