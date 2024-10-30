import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnifiedRegistryRoutingModule } from './unified-registry-routing.module';
import { PiiDataComponent } from './pii-data/pii-data.component';
import { NonPiiData1Component } from './non-pii-data1/non-pii-data1.component';
import { NonPiiData2Component } from './non-pii-data2/non-pii-data2.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { ViewAllComponent } from './view-all/view-all.component';
@NgModule({
  declarations: [
    PiiDataComponent,
    NonPiiData1Component,
    NonPiiData2Component,
    ViewAllComponent
  ],
  imports: [
    CommonModule,
    UnifiedRegistryRoutingModule,
    FormsModule,
    NgxSpinnerModule
  ]
})
export class UnifiedRegistryModule { }
