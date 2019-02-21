import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CardBrowserPage } from './card-browser.page';
import { PipesModule } from '../../pipes';
var CardBrowserPageModule = /** @class */ (function () {
    function CardBrowserPageModule() {
    }
    CardBrowserPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                PipesModule,
                RouterModule.forChild([
                    {
                        path: '',
                        component: CardBrowserPage
                    }
                ])
            ],
            declarations: [
                CardBrowserPage
            ]
        })
    ], CardBrowserPageModule);
    return CardBrowserPageModule;
}());
export { CardBrowserPageModule };
//# sourceMappingURL=card-browser.page.module.js.map