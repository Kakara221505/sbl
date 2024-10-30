import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentComponent } from './department.component';
import{DepartmentListComponent} from './department-list/department-list.component'
import {DepartmentAddComponent} from './department-add/department-add.component'
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentViewComponent } from './department-view/department-view.component';
const routes: Routes = [
  {
    path: '', 
    component: DepartmentComponent 
   },
   {
    path:'list',
    component: DepartmentListComponent
   },
   {
    path:'add',
    component:DepartmentAddComponent
   },
   {
    path:'edit',
    component:DepartmentEditComponent
   },
   {
    path:'edit/:id',
    component:DepartmentEditComponent 
   },
  {
    path:'view/:id',
    component:DepartmentViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
