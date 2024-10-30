import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SftpComponent } from './sftp.component';
import { SftpListComponent } from './sftp-list/sftp-list.component';


const routes: Routes = [
  {
    path:'',
    component:SftpComponent
  },
  {
    path:'list',
    component:SftpListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SftpRoutingModule { }
