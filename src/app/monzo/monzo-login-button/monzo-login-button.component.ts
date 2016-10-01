import { Component, OnInit } from '@angular/core';
import MonzoConstants from '../monzo.constants';

@Component({
  selector: 'app-monzo-login-button',
  templateUrl: './monzo-login-button.component.html',
  styleUrls: ['./monzo-login-button.component.css']
})
export class MonzoLoginButtonComponent implements OnInit {

  monzoLogin = 'https://auth.getmondo.co.uk/' +
     '?client_id=' + MonzoConstants.clientId + '&' +
     'redirect_uri=' + MonzoConstants.redirectUrl + '&' +
     'response_type=code&state=foo';

  ngOnInit() {
    console.log(MonzoConstants);
  }
}
