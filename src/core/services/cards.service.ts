import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Card } from '../';

const cardDataPath: string = './data/cards.json';

@Injectable()
export class CardsService {

    constructor(
        private http: HttpClient) {
    }

    public getCards(): Observable<Card[]> {

        return this
            .http
            .get<Card[]>(cardDataPath);
    }

    public getImagePath(card: Card): string {
        return `./assets/cards/${card.id}.png`;
    }
}
