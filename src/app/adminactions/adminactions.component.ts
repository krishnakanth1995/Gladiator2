import { Component, OnInit } from '@angular/core';
import {AdminActionService} from 'src/app/services/Adminaction.service';
import { Approval } from '../models/approval';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-adminactions',
  templateUrl: './adminactions.component.html',
  styleUrls: ['./adminactions.component.css']
})
export class AdminactionsComponent implements OnInit {
  customer:any=[];
  searchTerm:string;
  res : boolean=false;
  app:any
  cust:any=[];

  constructor(private adminactionservice : AdminActionService) { }

  ngOnInit(): void {
    this.fetchpendingapprovals();
    this.fetchapprovals();
  }


  fetchpendingapprovals()
  {
    this.adminactionservice.viewpendingapprovals().subscribe((data) => {this.customer=data;})
  }

  public approveRecords(cus:boolean,cid:any)
  {
    this.app=[];
    this.app=new Approval();
    this.app.CID=cid;
    this.app.IsApproved=cus;
    this.adminactionservice.adminapproval(this.app).subscribe((data)=>{})

  }

  fetchapprovals()
  {
    this.adminactionservice.viewapproval().subscribe((data) => {this.cust=data;})
  }
}


