import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeRoutingModule } from './exchange-routing.module';
import { ExchangeComponent } from './exchange.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExchangeComponent
  ],
  imports: [
    CommonModule,
    ExchangeRoutingModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class ExchangeModule { }
