import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as Pages from './pages';
var routes = [
    { path: '', redirectTo: Pages.CardBrowserPage.ROUTE, pathMatch: 'full' },
    { path: Pages.CardBrowserPage.ROUTE, loadChildren: './pages/card-browser/card-browser.page.module#CardBrowserPageModule' },
    { path: Pages.CardDetailPage.ROUTE, loadChildren: './pages/card-detail/card-detail.page.module#CardDetailPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map