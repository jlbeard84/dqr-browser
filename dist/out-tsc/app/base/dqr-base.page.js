var DQRBasePage = /** @class */ (function () {
    function DQRBasePage() {
        this.appTitle = DQRBasePage.APP_NAME;
    }
    Object.defineProperty(DQRBasePage.prototype, "displayTitle", {
        get: function () {
            return "" + this.pageTitle;
        },
        enumerable: true,
        configurable: true
    });
    DQRBasePage.APP_NAME = 'DQR Browser';
    return DQRBasePage;
}());
export { DQRBasePage };
//# sourceMappingURL=dqr-base.page.js.map