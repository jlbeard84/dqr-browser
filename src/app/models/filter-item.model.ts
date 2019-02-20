export class FilterItem {
    public name: string;
    public value: number;
    public isActive: boolean;

    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;

        this.isActive = false;
    }
}
