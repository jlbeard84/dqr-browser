import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as Pages from './pages';

const routes: Routes = [
  { path: '', redirectTo: Pages.CardBrowserPage.ROUTE, pathMatch: 'full' },
  { path: Pages.CardBrowserPage.ROUTE, loadChildren: './pages/card-browser/card-browser.page.module#CardBrowserPageModule' },
  { path: Pages.CardDetailPage.ROUTE, loadChildren: './pages/card-detail/card-detail.page.module#CardDetailPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
