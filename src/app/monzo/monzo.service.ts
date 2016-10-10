import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import MonzoConstants from './monzo.constants';

import { AuthService } from '../auth/auth.service';

import 'rxjs/add/operator/map';

@Injectable()
export class MonzoService {

  constructor(private http: Http, private authService: AuthService) { }

  exchangeAccessToken(code: string): Observable<string> {
    const data = {
      client_id: MonzoConstants.clientId,
      client_secret: MonzoConstants.clientSecret,
      redirect_uri: MonzoConstants.redirectUrl,
      grant_type: 'authorization_code',
      code,
    };

    const s = Object.keys(data).map(k => `${k}=${data[k]}`).join('&');

    const h = new Headers();
    h.set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(MonzoConstants.monzoApiUrl + '/oauth2/token', s, {
      headers: h,
    }).map(r => r.json().access_token);
  }

  getAccounts(): Observable<{accounts: monzo.Account[]}> {
    return this.authService.get(MonzoConstants.monzoApiUrl + '/accounts')
        .map(r => r.json());
  }

  getTransactions(accountId: string): Observable<{transactions: any[]}> {
    const url = MonzoConstants.monzoApiUrl + '/transactions?account_id=' + accountId;
    return this.authService.get(url)
        .map(r => r.json());
  }


}
