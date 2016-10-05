import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { MonzoLoginButtonComponent } from './monzo/monzo-login-button/monzo-login-button.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home/home.component';

import { AuthService } from './auth/auth.service';
import { MonzoService } from './monzo/monzo.service';

@NgModule({
  declarations: [
    AppComponent,
    MonzoLoginButtonComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthService,
    MonzoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
