import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockchainComponent } from './blockchain.component';
import { BlockchainViewComponent } from './blockchain-view/blockchain-view.component';

const routes: Routes = [
  {
    path:'',
    component:BlockchainComponent
  },
  {
    path:'views/:aadharNo',
    component:BlockchainViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockchainRoutingModule { }
