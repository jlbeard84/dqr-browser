import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { DQRCard, Deck } from '../models';

@Injectable()
export class DeckService {

    private readonly DECK_STORAGE_KEY = "deck";

    public decks: BehaviorSubject<Deck[]> = new BehaviorSubject<Deck[]>([]);

    private _deckList: Deck[] = [];

    constructor(
        private storage: Storage) {

        this.load();
    }

    public addDeck(
        deckName: string): Deck {

        const newDeck = new Deck(deckName);
        this._deckList.push(newDeck);
        this.save();
        this.decks.next(this._deckList);

        return newDeck;
    }

    public getDeck(
        deckName: string): Deck {

        const trimmedDeckName = deckName
            .toLowerCase()
            .trim();

        if (!trimmedDeckName) {
            return null;
        }

        for (let deck of this._deckList) {
            if (deck.name.toLowerCase().trim() === trimmedDeckName) {
                return deck;
            }
        }

        return null;
    }

    public removeDeck(
        index: number): void {
    
        if (this._deckList.length <= index) {
            return;
        }

        this._deckList.splice(index, 1);
        this.save();
        this.decks.next(this._deckList);
    }

    public addCard(
        deck: Deck,
        card: DQRCard, 
        index: number = null): void {

        if (index !== null ||
            index > deck.cards.length ||
            index < 0) {

            deck.cards.push(card);
        } else {
            deck.cards.splice(index, 0, card);
        }

        this.save();
    }

    public removeCard(
        deck: Deck,
        index: number): void {

        deck.cards.splice(index, 1);
        this.save();
    }

    public load(): void {
        this.storage
            .get(this.DECK_STORAGE_KEY)
            .then((data: any) => {
                if (!data) {
                    this._deckList = [];
                    return;
                }

                if (typeof(data) === "string") {
                    this._deckList = JSON.parse(data);
                } else {
                    this._deckList = data;
                }

                this.decks.next(this._deckList);
                console.log("Decks loaded");
            });
    }

    public save(): void {
        this.storage
            .set(
                this.DECK_STORAGE_KEY,
                this._deckList)
            .then(() => {
                console.log("Saved decks");
            });
    }
}
