import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { CardSkill } from '../enums';
var CardSkillPipe = /** @class */ (function () {
    function CardSkillPipe() {
    }
    CardSkillPipe.prototype.transform = function (value) {
        return CardSkill[value];
    };
    CardSkillPipe = tslib_1.__decorate([
        Pipe({
            name: 'cardSkill'
        })
    ], CardSkillPipe);
    return CardSkillPipe;
}());
export { CardSkillPipe };
//# sourceMappingURL=card-skill.pipe.js.map