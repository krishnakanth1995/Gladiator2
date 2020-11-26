import { Component, OnInit } from '@angular/core';
import {TransactionService} from 'src/app/services/TransactionService';
import {Transaction} from 'src/app/models/transaction.model';

@Component({
  selector: 'app-neft',
  templateUrl: './neft.component.html',
  styleUrls: ['./neft.component.css']
})
export class NeftComponent implements OnInit {
  trans:Transaction;
  transId:any;

  constructor(private transactionservice :TransactionService) { }

  ngOnInit(): void 
  {

  }

  onSubmit()
  {
    this.transactionservice.newtranasction(this.trans).subscribe((data) =>
    {
      if(data === " Insufficient Funds to carry out this trasaction")
      {
        alert("Transaction Failed\nPlease check your accout balance")
      }
      else 
      {
        this.transId=data;
        localStorage.setItem('transId',data.toString())
      }

    })
  }

}
