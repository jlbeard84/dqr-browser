import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var cardDataPath = './assets/data/cards.json';
var CardsService = /** @class */ (function () {
    function CardsService(http) {
        this.http = http;
    }
    Object.defineProperty(CardsService.prototype, "currentCard", {
        get: function () { return this._currentCard; },
        enumerable: true,
        configurable: true
    });
    CardsService.prototype.setCurrentCard = function (card) {
        this._currentCard = card;
    };
    CardsService.prototype.getCards = function () {
        return this
            .http
            .get(cardDataPath);
    };
    CardsService.prototype.getImagePath = function (card) {
        if (card.id) {
            return "./assets/cards/" + card.id + ".png";
        }
        return "./assets/common/standard-back.png";
    };
    CardsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CardsService);
    return CardsService;
}());
export { CardsService };
//# sourceMappingURL=cards.service.js.map