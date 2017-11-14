import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
      MatCardModule,
      MatSidenavModule,
      MatDialogModule
    ],
    exports : [
      MatCardModule,
      MatSidenavModule,
      MatDialogModule
    ]
  })
  export class DqrbUiModule { }
