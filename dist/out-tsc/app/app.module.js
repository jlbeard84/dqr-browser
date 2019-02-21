import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CardsService } from './services';
import { CardFilterPage } from './pages';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                CardFilterPage
            ],
            entryComponents: [
                CardFilterPage
            ],
            imports: [
                BrowserModule,
                IonicModule.forRoot(),
                AppRoutingModule,
                HttpClientModule
            ],
            providers: [
                StatusBar,
                SplashScreen,
                CardsService,
                {
                    provide: RouteReuseStrategy,
                    useClass: IonicRouteStrategy
                }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map