import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { DQRBasePage } from '../../base';
import { CardFilter } from '../../models';
import { FilterItem } from '../../models/filter-item.model';
var CardFilterPage = /** @class */ (function (_super) {
    tslib_1.__extends(CardFilterPage, _super);
    function CardFilterPage(navParams, modalController) {
        var _this = _super.call(this) || this;
        _this.navParams = navParams;
        _this.modalController = modalController;
        _this.costFilterItems = [];
        _this.buildFilterItems();
        if (_this.navParams && _this.navParams.data && _this.navParams.data.filter) {
            _this.filter = _this.navParams.data.filter;
        }
        if (_this.filter) {
            if (_this.filter.cost) {
                for (var _i = 0, _a = _this.costFilterItems; _i < _a.length; _i++) {
                    var filterItem = _a[_i];
                    if (_this.filter.cost.indexOf(filterItem.value) > -1) {
                        filterItem.isActive = true;
                        continue;
                    }
                }
            }
        }
        return _this;
    }
    CardFilterPage_1 = CardFilterPage;
    Object.defineProperty(CardFilterPage.prototype, "pageTitle", {
        get: function () {
            return CardFilterPage_1.PAGE_NAME;
        },
        enumerable: true,
        configurable: true
    });
    CardFilterPage.prototype.onFilterItemClick = function (filterItem) {
        filterItem.isActive = !filterItem.isActive;
    };
    CardFilterPage.prototype.saveFilter = function () {
        // build filter to send back
        var returnFilter = new CardFilter();
        for (var _i = 0, _a = this.costFilterItems; _i < _a.length; _i++) {
            var costFilterItem = _a[_i];
            if (costFilterItem.isActive) {
                returnFilter.cost.push(costFilterItem.value);
            }
        }
        this.modalController.dismiss({ filter: returnFilter });
    };
    CardFilterPage.prototype.buildFilterItems = function () {
        // card costs are between 0 and 10
        this.costFilterItems = [];
        for (var i = 0; i < 11; i++) {
            this.costFilterItems.push(new FilterItem(i.toString(), i));
        }
    };
    var CardFilterPage_1;
    CardFilterPage.ROUTE = 'card-filter';
    CardFilterPage.PAGE_NAME = 'Filter';
    CardFilterPage = CardFilterPage_1 = tslib_1.__decorate([
        Component({
            selector: 'page-card-filter',
            templateUrl: 'card-filter.page.html',
            styleUrls: ['card-filter.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [NavParams,
            ModalController])
    ], CardFilterPage);
    return CardFilterPage;
}(DQRBasePage));
export { CardFilterPage };
//# sourceMappingURL=card-filter.page.js.map