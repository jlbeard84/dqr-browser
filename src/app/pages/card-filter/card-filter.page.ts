import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

import { DQRBasePage } from '../../base';
import { CardFilter } from '../../models';
import { FilterItem } from '../../models/filter-item.model';

@Component({
    selector: 'page-card-filter',
    templateUrl: 'card-filter.page.html'
  })
export class CardFilterPage extends DQRBasePage {

    public static ROUTE: string = 'card-filter';
    public static PAGE_NAME: string = 'Filter';

    public filter: CardFilter;

    public costFilterItems: FilterItem[] = [];

    public get pageTitle(): string {
        return CardFilterPage.PAGE_NAME;
    }

    constructor(
        private navParams: NavParams,
        private modalController: ModalController) {

        super();
        this.buildFilterItems();

        if (this.navParams && this.navParams.data && this.navParams.data.filter) {
            this.filter = this.navParams.data.filter;
        }

        if (this.filter) {
            if (this.filter.cost) {
                for (const filterItem of this.costFilterItems) {
                    if (this.filter.cost.indexOf(filterItem.value) > -1) {
                        filterItem.isActive = true;
                        continue;
                    }
                }
            }
        }
    }

    public onFilterItemClick(filterItem: FilterItem): void {
        filterItem.isActive = !filterItem.isActive;
    }

    public saveFilter(): void {

        // build filter to send back
        const returnFilter = new CardFilter();

        for (const costFilterItem of this.costFilterItems) {
            if (costFilterItem.isActive) {
                returnFilter.cost.push(costFilterItem.value);
            }
        }

        this.modalController.dismiss({filter: returnFilter});
    }

    private buildFilterItems(): void {
        // card costs are between 0 and 10
        this.costFilterItems = [];

        for (let i = 0; i < 11; i++) {
            this.costFilterItems.push(new FilterItem(i.toString(), i));
        }
    }
}
