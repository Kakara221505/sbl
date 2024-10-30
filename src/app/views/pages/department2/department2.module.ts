import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Department2RoutingModule } from './department2-routing.module';
import { Department2Component } from './department2.component';
import { Department2EditComponent } from './department2-edit/department2-edit.component';
import { Department2AddComponent } from './department2-add/department2-add.component';
import { Department2ListComponent } from './department2-list/department2-list.component';
import { Department2ViewComponent } from './department2-view/department2-view.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    Department2Component,
    Department2EditComponent,
    Department2AddComponent,
    Department2ListComponent,
    Department2ViewComponent,

  ],
  imports: [
    CommonModule,
    Department2RoutingModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [DatePipe],
})
export class Department2Module { }
