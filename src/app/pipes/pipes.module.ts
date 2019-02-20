import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CardClassPipe } from './card-class.pipe';
import { CardSkillPipe } from './card-skill.pipe';
import { CardTypePipe } from './card-type.pipe';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [
        CardClassPipe,
        CardSkillPipe,
        CardTypePipe
    ],
    declarations: [
        CardClassPipe,
        CardSkillPipe,
        CardTypePipe
    ]
})
export class PipesModule {}
