import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import MonzoConstants from './monzo.constants';

import 'rxjs/add/operator/map';

@Injectable()
export class MonzoService {

  constructor(private http: Http) { }

  exchangeAccessToken(code: string): Observable<string> {
    return this.http.post(MonzoConstants.monzoApiUrl + '/oauth2/token', {
      client_id: MonzoConstants.clientId,
      client_secret: MonzoConstants.clientSecret,
      redirect_url: MonzoConstants.redirectUrl,
      code,
    }).map(r => r.json().access_token);
  }
}
