import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminactionsComponent } from './adminactions/adminactions.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminActionService } from './services/Adminaction.service';
import {Ng2SearchPipeModule } from 'ng2-search-filter';
import { CustomerFilterPipe } from './Filters/customer-filter.pipe';
import {FormsModule} from '@angular/forms';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { AccountOpeningService } from './services/accountopeningservice';
import { TransactionService } from './services/TransactionService';
import { NeftComponent } from './neft/neft.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminactionsComponent,
    CustomerFilterPipe,
    CustomerdetailsComponent,
    NeftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [AdminActionService,AccountOpeningService,TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
