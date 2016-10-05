import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private token: string;

  constructor(private http: Http) { }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    if (options && options.headers && !options.headers.has('Authorization')) {
      options.headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.get(url, options);
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    if (options && options.headers && !options.headers.has('Authorization')) {
      options.headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.post(url, body, options);
  }

  setToken(token: string) {
    this.token = token;
  }

}
