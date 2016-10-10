import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonzoService } from '../../monzo/monzo.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  private transactions: any[] = [];

  constructor(
    private monzoService: MonzoService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach(params => {
      console.log("params=", params)
      const accId = params['account_id'];
      if (!accId) {
        return;
      }
      this.monzoService.getTransactions(accId).subscribe(trans => {
        this.transactions = trans.transactions.reverse()
      });
    });
  }
}
