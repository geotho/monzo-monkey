import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import MonzoConstants from '../monzo/monzo.constants';

@Injectable()
export class AuthService {
  private token: string;

  constructor(private http: Http) { }

  // this should probably live someplace else
  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    options = options || {};
    options.headers = options.headers || new Headers();

    if (!options.headers.has('Authorization')) {
      options.headers.set('Authorization', `Bearer ${this.token}`);
    }

    return this.http.get(url, options);
  }

  // this should probably also live someplace else
  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    options = options || {};
    options.headers = options.headers || new Headers();

    if (!options.headers.has('Authorization')) {
      options.headers.set('Authorization', `Bearer ${this.token}`);
    }

    return this.http.post(url, body, options);
  }

  // this should almost certainly live someplace else
  isTokenValid(): Observable<boolean> {
    const headers = new Headers();

    headers.set('Authorization', 'Bearer ' + this.token);
    const o = this.http.get(MonzoConstants.monzoApiUrl + '/ping/whoami', {headers})
        .map(x => x.ok);

    o.subscribe(b => {
      console.log('b', b);
      if (!b) {
      }
    }, _ => this.unsetToken());
    return o;
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.token = token;
  }

  unsetToken() {
    localStorage.removeItem('token');
    this.token = undefined;
  }

  loadToken() {
    this.token = localStorage.getItem('token');
  }

  isLoggedIn(): boolean | Observable<boolean> {
    this.loadToken();

    if (!this.token) {
      return false;
    }

    return this.isTokenValid();
  }

}
