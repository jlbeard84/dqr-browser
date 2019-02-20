import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CardFilterPage } from './card-filter.page';
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
        component: CardFilterPage
      }
    ])
  ],
  declarations: [
    CardFilterPage
  ]
})
export class CardFilterPageModule {}
