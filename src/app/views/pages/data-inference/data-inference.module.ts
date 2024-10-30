import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataInferenceRoutingModule } from './data-inference-routing.module';
import { DataInferenceComponent } from './data-inference.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    DataInferenceComponent
  ],
  imports: [
    CommonModule,
    DataInferenceRoutingModule,
    FormsModule,
    NgxSpinnerModule,
  ]
})
export class DataInferenceModule { }
