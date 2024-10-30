import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view.component';
import { PublicComponent } from './public/public.component';

const routes: Routes = [
  {
    path:'',
    component:ViewComponent
  },
  {
    path:'Redeem',
    component:PublicComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
