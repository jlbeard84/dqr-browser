import {Pipe, PipeTransform} from '@angular/core';

import { CardType } from '../enums/card-type.enum';

@Pipe({
  name: 'cardType'
})
export class CardTypePipe implements PipeTransform {

  public transform(value: number): any {

    return CardType[value];
  }
}
