import { DQRCard } from './dqr-card.model';

export class Deck {
    public name: string;
    public cards: DQRCard[] = [];

    constructor(name: string) {
        this.name = name;
    }
}
