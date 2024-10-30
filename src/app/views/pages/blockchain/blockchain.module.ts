import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
import { BlockchainRoutingModule } from './blockchain-routing.module';
import { BlockchainComponent } from './blockchain.component'
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BlockchainViewComponent } from './blockchain-view/blockchain-view.component';


@NgModule({
  declarations: [
    BlockchainComponent,
    BlockchainViewComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BlockchainRoutingModule,
    FormsModule,
    NgxSpinnerModule,
  ]
})
export class BlockchainModule { }
