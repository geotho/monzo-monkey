import { Component, OnInit } from '@angular/core';

import { MonzoService } from '../../monzo/monzo.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  private accounts: monzo.Account[] = [];

  constructor(private monzoService: MonzoService) { }

  ngOnInit() {
    this.monzoService.getAccounts().subscribe(
      accs => this.accounts = accs.accounts
    );
  }

}
