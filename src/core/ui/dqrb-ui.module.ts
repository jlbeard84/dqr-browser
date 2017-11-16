import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
    imports: [
      MatCardModule,
      MatSidenavModule,
      MatDialogModule,
      MatToolbarModule,
      MatListModule,
      MatTooltipModule,
      MatButtonModule,
      FlexLayoutModule,
      AngularFontAwesomeModule
    ],
    exports : [
      MatCardModule,
      MatSidenavModule,
      MatDialogModule,
      MatToolbarModule,
      MatListModule,
      MatTooltipModule,
      MatButtonModule,
      FlexLayoutModule,
      AngularFontAwesomeModule
    ]
  })
  export class DqrbUiModule { }
