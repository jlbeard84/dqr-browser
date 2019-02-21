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
    public group: number;
    public rarity: number;
    public relatedIDs: number[] = [];

    public get primaryTitle(): string {
        if (this.enTitle !== null && this.enTitle.trim() !== '') {
            return this.enTitle;
        }

        return this.jpTitle;
    }

    public get secondaryTitle(): string {
        if (this.enTitle === null || this.enTitle.trim() === '') {
            return '';
        }

        return this.jpTitle;
    }

    public get primaryText(): string {
        if (this.enText !== null && this.enText.trim() !== '') {
            return this.enText;
        }

        return this.jpText;
    }

    public static clone(sourceCard: DQRCard): DQRCard {
        const targetCard = new DQRCard();

        targetCard.id = sourceCard.id;
        targetCard.enTitle = sourceCard.enTitle;
        targetCard.jpTitle = sourceCard.jpTitle;
        targetCard.enText = sourceCard.enText;
        targetCard.jpText = sourceCard.jpText;
        targetCard.cost = sourceCard.cost;
        targetCard.attack = sourceCard.attack;
        targetCard.hp = sourceCard.hp;
        targetCard.cardType = sourceCard.cardType;
        targetCard.cardClass = sourceCard.cardClass;
        targetCard.cardSkills = sourceCard.cardSkills;
        targetCard.group = sourceCard.group;
        targetCard.rarity = sourceCard.rarity;
        targetCard.relatedIDs = sourceCard.relatedIDs;

        return targetCard;
    }
}
