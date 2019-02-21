import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CardBrowserPage } from './card-browser.page';
import { PipesModule } from '../../pipes';

@NgModule({
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
export class CardBrowserPageModule {}
