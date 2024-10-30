import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Department2Component} from './department2.component'
import {Department2AddComponent} from '../../../views/pages/department2/department2-add/department2-add.component'
import {Department2EditComponent} from '../../../views/pages/department2/department2-edit/department2-edit.component'
import {Department2ListComponent} from '../../../views/pages/department2/department2-list/department2-list.component'
import {Department2ViewComponent} from '../../../views/pages/department2/department2-view/department2-view.component'
// import { Department2ListComponent } from '../../../views/pages/department2/department2-list/department2-list.component';
const routes: Routes = [
  {
    path:'',
    component: Department2Component 
  },
  {
    path:'list',
    component:Department2ListComponent
  },
  {
    path:'add',
    component:Department2AddComponent
   },
   {
    path:'edit',
    component:Department2EditComponent
   },
   {
    path:'edit/:id',
    component:Department2EditComponent 
   },
   {
    path:'view',
    component:Department2ViewComponent
  },
  {
    path:'view/:id',
    component:Department2ViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Department2RoutingModule { }
