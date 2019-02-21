import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { CardClass } from '../enums/card-class.enum';
var CardClassPipe = /** @class */ (function () {
    function CardClassPipe() {
    }
    CardClassPipe.prototype.transform = function (value) {
        return CardClass[value];
    };
    CardClassPipe = tslib_1.__decorate([
        Pipe({
            name: 'cardClass'
        })
    ], CardClassPipe);
    return CardClassPipe;
}());
export { CardClassPipe };
//# sourceMappingURL=card-class.pipe.js.map