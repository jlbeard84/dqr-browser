import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardClassPipe } from './card-class.pipe';
import { CardSkillPipe } from './card-skill.pipe';
import { CardTypePipe } from './card-type.pipe';
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = tslib_1.__decorate([
        NgModule({
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
    ], PipesModule);
    return PipesModule;
}());
export { PipesModule };
//# sourceMappingURL=pipes.module.js.map