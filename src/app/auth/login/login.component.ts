import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { MonzoService } from '../../monzo/monzo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,
      private authService: AuthService,
      private monzoService: MonzoService,
      private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const c = params['code'];
      if (c) {
        this.monzoService.exchangeAccessToken(c).subscribe(token => {
          this.authService.setToken(token);
          this.router.navigate(['/']);
        });
      }
    });
  }

}
