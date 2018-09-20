import { CardClass, CardSkill, CardType } from '../enums';

export class DQRCard {
    public id: number;
    public enTitle: string;
    public jpTitle: string;
    public enText: string;
    public jpText: string;
    public cost: number;
    public attack?: number;
    public hp?: number;
    public cardType: CardType;
    public cardClass: CardClass;
    public cardSkills: CardSkill[] = [];
    public family: string;
    public rarity: number;
}