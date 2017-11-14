import {Pipe, PipeTransform} from '@angular/core';

import { CardClass } from '../enums/card-class.enum';

@Pipe({
  name: 'cardClass'
})
export class CardClassPipe implements PipeTransform {

  public transform(value: number): any {

    return CardClass[value];
  }
}
