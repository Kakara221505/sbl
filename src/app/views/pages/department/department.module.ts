import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentViewComponent } from './department-view/department-view.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    DepartmentComponent,
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentViewComponent,
    DepartmentEditComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DepartmentModule { }
