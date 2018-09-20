export abstract class DQRBasePage {

    public readonly appTitle: string = "DQR Browser";
    public abstract pageTitle: string;

    public get displayTitle(): string {
        return `${this.appTitle} - ${this.pageTitle}`;
    }
}