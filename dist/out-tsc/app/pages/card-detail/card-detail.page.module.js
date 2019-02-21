import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CardDetailPage } from './card-detail.page';
import { PipesModule } from '../../pipes';
var CardDetailPageModule = /** @class */ (function () {
    function CardDetailPageModule() {
    }
    CardDetailPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                PipesModule,
                RouterModule.forChild([
                    {
                        path: '',
                        component: CardDetailPage
                    }
                ])
            ],
            declarations: [
                CardDetailPage
            ]
        })
    ], CardDetailPageModule);
    return CardDetailPageModule;
}());
export { CardDetailPageModule };
//# sourceMappingURL=card-detail.page.module.js.map