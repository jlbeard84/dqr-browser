export abstract class DQRBasePage {

    public static APP_NAME: string = 'DQR Browser';

    public readonly appTitle: string = DQRBasePage.APP_NAME;
    public abstract get pageTitle(): string;

    public get displayTitle(): string {
        return `${this.pageTitle}`;
    }
}
