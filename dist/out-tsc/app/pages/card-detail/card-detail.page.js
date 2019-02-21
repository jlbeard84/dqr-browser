import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DQRBasePage } from '../../base';
import { CardsService } from '../../services';
var CardDetailPage = /** @class */ (function (_super) {
    tslib_1.__extends(CardDetailPage, _super);
    function CardDetailPage(navController, cardsService) {
        var _this = _super.call(this) || this;
        _this.navController = navController;
        _this.cardsService = cardsService;
        _this.showDetailCard = false;
        return _this;
    }
    Object.defineProperty(CardDetailPage.prototype, "pageTitle", {
        get: function () {
            return this._pageTitle;
        },
        enumerable: true,
        configurable: true
    });
    CardDetailPage.prototype.ngOnInit = function () {
        if (!this.cardsService.currentCard) {
            this.navController.navigateBack('card-browser');
            return;
        }
        this.detailCard = this.cardsService.currentCard;
        this._pageTitle = this.detailCard.enTitle;
        this.showDetailCard = true;
    };
    CardDetailPage.prototype.getImagePath = function (card) {
        return this.cardsService.getImagePath(card);
    };
    CardDetailPage.ROUTE = 'card-detail';
    CardDetailPage = tslib_1.__decorate([
        Component({
            selector: 'page-card-detail',
            templateUrl: 'card-detail.page.html',
            styleUrls: ['card-detail.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            CardsService])
    ], CardDetailPage);
    return CardDetailPage;
}(DQRBasePage));
export { CardDetailPage };
//# sourceMappingURL=card-detail.page.js.map