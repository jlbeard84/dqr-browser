import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { DQRCard } from '../models';

const cardDataPath: string = './data/cards.json';

@Injectable()
export class CardsService {

    constructor(
        private http: HttpClient) {
    }

    public getCards(): Observable<DQRCard[]> {

        return this
            .http
            .get<DQRCard[]>(cardDataPath);
    }

    public getImagePath(card: DQRCard): string {
        return `./assets/cards/${card.id}.png`;
    }
}
