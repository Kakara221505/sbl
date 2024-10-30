import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UnifiedRegistryComponent } from './unified-registry.component'
import {NonPiiData1Component } from './non-pii-data1/non-pii-data1.component'
import {NonPiiData2Component } from './non-pii-data2/non-pii-data2.component'
import {PiiDataComponent } from './pii-data/pii-data.component'
import {ViewAllComponent} from './view-all/view-all.component'
const routes: Routes = [

  {
    path:'',
    component:UnifiedRegistryComponent
  },
  {
    path:'data',
    component: PiiDataComponent,
  },
  {
    path:'data1',
    component:NonPiiData1Component
  },
  {
    path:'data2',
    component:NonPiiData2Component
  },
  {
    path:'view/:aadharNo',
    component:ViewAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnifiedRegistryRoutingModule { }
