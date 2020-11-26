import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Injectable} from '@angular/core';
import {Registration} from 'src/app/models/registration.model';

@Injectable({providedIn:"root"})

export class  AccountOpeningService
{
    baseUrl:string ="https://localhost:44331/api/AccountOpening/OpeningAccount";
    constructor(private http : HttpClient) { }


    registeruser(newuser)
    {
        return this.http.post(this.baseUrl,newuser)
    }
}