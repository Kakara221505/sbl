import { Component, OnInit } from '@angular/core';
import {SftpService} from '../../service/sftp/sftp.service'
import { FormGroup,FormControl, Validators,FormBuilder} from "@angular/forms";
import {ActivatedRoute,Router} from '@angular/router'
import {ToastrService} from 'ngx-toastr'
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-sftp-list',
  templateUrl: './sftp-list.component.html',
  styleUrls: ['./sftp-list.component.scss']
})
export class SftpListComponent implements OnInit {
  departmentJsonList: any;
  department1JsonList: any;
  departmentJsonDownload: any;
  listDownload: any;
  department2JsonDownload: any;
  constructor( private sftpService:SftpService,private route: ActivatedRoute,
    private router: Router,private toastr: ToastrService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.department1Json();
    this.department2Json();
  }
  department1Json(){   
    this.spinner.show()
    this.sftpService.department1SftpJson().subscribe((data:any)=>{
      this.department1JsonList=data
      console.log(this.department1JsonList)
      this.spinner.hide()
    },error =>{
       this.toastr.error(error.error.message,`Error`)
      })
      this.spinner.hide()
    }
  department2Json(){   
    this.spinner.show()
    this.sftpService.department2SftpJson().subscribe((data:any)=>{
      this.departmentJsonList=data
      console.log(this.departmentJsonList)  
      this.spinner.hide()
    },error =>{
      this.toastr.error(error.error.message,`Error`)
      })
      this.spinner.hide()
    } 
 downloadFileDepartment1(filename:any){   
  this.spinner.show()
    this.sftpService.department1Download(filename).subscribe((data:any)=>{
      this.departmentJsonDownload=data
      console.log(this.departmentJsonDownload)  
      this.toastr.success('Department 1 File Download Successfull','Success')
      this.spinner.hide()
      const c = JSON.stringify(data);
      
      const file = new Blob([c], {type: 'text/json'});
      this.download(file,filename);

    },error =>{
      this.toastr.error(error.error.message,`Error`)
      })
      this.spinner.hide()
    }

  downloadFileDepartment2(filename2:any){  
    this.spinner.show() 
    this.sftpService.department2Download(filename2).subscribe((data:any)=>{
      this.department2JsonDownload=data
      console.log(this.department2JsonDownload)  
      this.toastr.success('Department 2 File Download Successfull','Success')
      this.spinner.hide()

      const c = JSON.stringify(data);
      const file = new Blob([c], {type: 'text/json'});
      this.download(file,filename2);

    },error =>{
      this.toastr.error(error.error.message,`Error`)
      })
      this.spinner.hide()
    }
    

    download(blob: any, filename: any) {
      // Others
          var a = document.createElement("a"),
                  url = URL.createObjectURL(blob);
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          setTimeout(function() {
              document.body.removeChild(a);
              window.URL.revokeObjectURL(url);  
          }, 0); 
    }
    
}
