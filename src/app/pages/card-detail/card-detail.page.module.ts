import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CardDetailPage } from './card-detail.page';
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
        component: CardDetailPage
      }
    ])
  ],
  declarations: [
    CardDetailPage
  ]
})
export class CardDetailPageModule {}
