import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: "root" })
export class TransactionService {

    baseUrl:string ="https://localhost:44331/api/TransactionPrimary/AddTransaction";
    constructor(private http: HttpClient)
    {


    }

    newtranasction(newtrans)
    {
        return this.http.post(this.baseUrl,newtrans);
    }


}
