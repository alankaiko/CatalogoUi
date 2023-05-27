import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {JwtModule} from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PagesModule} from "./pages/pages.module";
import {ThemesModule} from "./themes/themes.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageService, SharedModule} from "primeng/api";
import {FormsModule} from "@angular/forms";
import {environment} from "../environments/environment";
import {SegurancaModule} from "./seguranca/seguranca.module";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {AuthGuard} from "./seguranca/auth.guard";
import {LogoutService} from "./seguranca/logout.service";
import {AuthService} from "./seguranca/auth.service";
import {MoneyHttp} from "./seguranca/money-http";
import {ErrorHandlerService} from "./seguranca/error-handler.service";
import {InstitucionalModule} from "./institucional/institucional.module";

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PagesModule,
    ThemesModule,
    SharedModule,
    SharedModule,
    FormsModule,
    InstitucionalModule,
    SegurancaModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: environment.tokenWhitelistedDomains,
        blacklistedRoutes: environment.tokenBlacklistedRoutes
      }
    })
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    AuthGuard,
    LogoutService,
    AuthService,
    MoneyHttp,
    ErrorHandlerService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
