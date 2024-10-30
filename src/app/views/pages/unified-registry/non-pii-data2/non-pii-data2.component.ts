import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder} from "@angular/forms";
import {ActivatedRoute,Router} from '@angular/router'
import {ToastrService} from 'ngx-toastr'
import {UnifiedService } from '../../service/unified_registry/unified.service'
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-non-pii-data2',
  templateUrl: './non-pii-data2.component.html',
  styleUrls: ['./non-pii-data2.component.scss']
})
export class NonPiiData2Component implements OnInit {
  nonPiiData: any;
  uuid = "";
  
  nonPiiDataUuid: any;

  constructor( private unifiedService:UnifiedService,private route: ActivatedRoute,
    private router: Router,private toastr: ToastrService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.nonPiiData2List()
  }
  nonPiiData2List(){ 
    this.spinner.show()
    this.unifiedService.getNonPiiData2(this.uuid).subscribe((data:any)=>{
      this.nonPiiData=data.data
      console.log(this.nonPiiData)
      this.spinner.hide()
    },error =>{
       this.toastr.error(error.error.message,`Error`)
      })
      this.spinner.hide()
    }
    // nonPiiData2ListByUuid(){ 
    //   this.spinner.show()
    //   this.uuid = this.uuid2
    //   this.unifiedService.getNonPiiData2Search(this.uuid).subscribe((data:any)=>{
    //     this.nonPiiDataUuid=data.data
    //     console.log(this.nonPiiDataUuid)
    //     this.toastr.success("Data Found Successfull",`Success`)
    //     this.spinner.hide()
    //   },error =>{
    //      this.toastr.error(error.error.message,`Error`)
    //     })
    //     this.spinner.hide()
    //   }
  

}
