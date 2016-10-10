import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';

import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { AccountsComponent } from './accounts/accounts/accounts.component';
import { AccountComponent } from './account/account/account.component';

const routes: Routes = [
  {
    path: 'accounts',
    component: AccountsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'account/:account_id',
    component: AccountComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
