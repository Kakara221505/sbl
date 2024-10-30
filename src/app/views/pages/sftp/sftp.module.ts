import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SftpRoutingModule } from './sftp-routing.module';
import { SftpComponent } from './sftp.component';
import { SftpListComponent } from './sftp-list/sftp-list.component';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    SftpComponent,
    SftpListComponent
  ],
  imports: [
    CommonModule,
    SftpRoutingModule,
    FormsModule,
    NgxSpinnerModule,
  ]
})
export class SftpModule { }
