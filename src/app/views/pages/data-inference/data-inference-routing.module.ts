import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataInferenceComponent } from './data-inference.component';

const routes: Routes = [
  {
    path:'',
    component:DataInferenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataInferenceRoutingModule { }
