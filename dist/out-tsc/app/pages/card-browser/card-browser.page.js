import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DQRBasePage } from '../../base';
import { CardsService } from '../../services';
import { CardFilter } from '../../models';
import { CardDetailPage } from '../card-detail/card-detail.page';
import { CardFilterPage } from '../card-filter/card-filter.page';
var CardBrowserPage = /** @class */ (function (_super) {
    tslib_1.__extends(CardBrowserPage, _super);
    function CardBrowserPage(cardsService, navController, modalController) {
        var _this = _super.call(this) || this;
        _this.cardsService = cardsService;
        _this.navController = navController;
        _this.modalController = modalController;
        _this.showImages = false;
        _this.showDescriptions = false;
        _this.searchQuery = '';
        _this.cardMasterList = [];
        _this.cards = [];
        _this.filter = new CardFilter();
        _this.cardsService.getCards().subscribe(function (cards) {
            _this.cardMasterList = cards.slice();
            _this.cards = cards;
        });
        return _this;
    }
    CardBrowserPage_1 = CardBrowserPage;
    Object.defineProperty(CardBrowserPage.prototype, "pageTitle", {
        get: function () {
            return CardBrowserPage_1.PAGE_NAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardBrowserPage.prototype, "showFilterObjects", {
        get: function () {
            if (!this.filter) {
                return false;
            }
            return (this.filter.cost.length > 0 ||
                this.filter.attack.length > 0 ||
                this.filter.class.length > 0 ||
                this.filter.hp.length > 0 ||
                this.filter.type.length > 0);
        },
        enumerable: true,
        configurable: true
    });
    CardBrowserPage.prototype.runFilter = function () {
        var _this = this;
        this.cards = this.cardMasterList.slice();
        if (!this.filter && !this.searchQuery) {
            return;
        }
        if (this.filter.cost && this.filter.cost.length > 0) {
            this.cards = this.cards.filter(function (card) {
                return (_this.filter.cost.indexOf(card.cost) > -1);
            });
        }
        // do search
        var searchValue = this.searchQuery;
        if (!searchValue || searchValue.trim() === '') {
            return;
        }
        searchValue = searchValue.toLowerCase();
        this.cards = this.cards.filter(function (card) {
            return ((card.enTitle && card.enTitle.toLowerCase().indexOf(searchValue) > -1) ||
                (card.jpTitle && card.jpTitle.indexOf(searchValue) > -1));
        });
    };
    CardBrowserPage.prototype.openFilter = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var filterModal;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: CardFilterPage,
                            componentProps: {
                                'filter': this.filter
                            }
                        })];
                    case 1:
                        filterModal = _a.sent();
                        filterModal.onDidDismiss().then(function (returnData) {
                            if (returnData && returnData.data && returnData.data.filter) {
                                _this.filter = returnData.data.filter;
                                _this.runFilter();
                            }
                        });
                        return [4 /*yield*/, filterModal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CardBrowserPage.prototype.removeCostFilter = function () {
        if (this.filter) {
            this.filter.cost = [];
        }
        this.runFilter();
    };
    CardBrowserPage.prototype.openDetail = function (card) {
        this.cardsService.setCurrentCard(card);
        this.navController.navigateForward(CardDetailPage.ROUTE);
    };
    CardBrowserPage.prototype.getImagePath = function (card) {
        return this.cardsService.getImagePath(card);
    };
    CardBrowserPage.prototype.onSearchCards = function (event) {
        this.searchQuery = event.target.value;
        this.runFilter();
    };
    CardBrowserPage.prototype.onResetSearch = function () {
        this.searchQuery = '';
        this.runFilter();
    };
    var CardBrowserPage_1;
    CardBrowserPage.ROUTE = 'card-browser';
    CardBrowserPage.PAGE_NAME = 'DQ Rivals Card Browser';
    CardBrowserPage = CardBrowserPage_1 = tslib_1.__decorate([
        Component({
            selector: 'page-card-browser',
            templateUrl: 'card-browser.page.html',
            styleUrls: ['card-browser.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [CardsService,
            NavController,
            ModalController])
    ], CardBrowserPage);
    return CardBrowserPage;
}(DQRBasePage));
export { CardBrowserPage };
//# sourceMappingURL=card-browser.page.js.map