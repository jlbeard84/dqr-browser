import {Pipe, PipeTransform} from '@angular/core';

import { CardSkill } from '../enums';

@Pipe({
  name: 'cardSkill'
})
export class CardSkillPipe implements PipeTransform {
    public transform(value: number): any {
        return CardSkill[value];
    }
}
