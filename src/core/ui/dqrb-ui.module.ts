import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
      MatCardModule,
      MatSidenavModule,
      MatDialogModule,
      MatToolbarModule,
      MatListModule,
      FlexLayoutModule
    ],
    exports : [
      MatCardModule,
      MatSidenavModule,
      MatDialogModule,
      MatToolbarModule,
      MatListModule,
      FlexLayoutModule
    ]
  })
  export class DqrbUiModule { }
