import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService }      from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private authService: AuthService, private router: Router) {}

  canActivate(): boolean | Observable<boolean> {
    const b = this.authService.isLoggedIn();

    if (typeof b === 'boolean') {
      if (!b) {
        this.router.navigate(['/login']);
      }
      return b;
    }

    b.subscribe(null, _ => this.router.navigate(['/login']));

    return b;
  }
}
