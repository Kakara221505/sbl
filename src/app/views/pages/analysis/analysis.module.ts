import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {NgChartsModule} from 'ng2-charts';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { AnalysisComponent } from './analysis.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from "ng-apexcharts";



@NgModule({
  declarations: [
    AnalysisComponent
  ],
  imports: [
    CommonModule,
    AnalysisRoutingModule,
    NgbModule,
    FormsModule,
    NgChartsModule,
    NgApexchartsModule
  ]
})
export class AnalysisModule { }
