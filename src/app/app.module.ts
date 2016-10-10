import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { MonzoLoginButtonComponent } from './monzo/monzo-login-button/monzo-login-button.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home/home.component';

import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { MonzoService } from './monzo/monzo.service';
import { AccountsComponent } from './accounts/accounts/accounts.component';
import { AccountComponent } from './account/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    MonzoLoginButtonComponent,
    LoginComponent,
    HomeComponent,
    AccountsComponent,
    AccountComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    MonzoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
