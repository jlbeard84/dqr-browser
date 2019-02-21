import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { CardType } from '../enums/card-type.enum';
var CardTypePipe = /** @class */ (function () {
    function CardTypePipe() {
    }
    CardTypePipe.prototype.transform = function (value) {
        return CardType[value];
    };
    CardTypePipe = tslib_1.__decorate([
        Pipe({
            name: 'cardType'
        })
    ], CardTypePipe);
    return CardTypePipe;
}());
export { CardTypePipe };
//# sourceMappingURL=card-type.pipe.js.map