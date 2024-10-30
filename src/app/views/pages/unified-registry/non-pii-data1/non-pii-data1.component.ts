import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder} from "@angular/forms";
import {ActivatedRoute,Router} from '@angular/router'
import {ToastrService} from 'ngx-toastr'
import {UnifiedService } from '../../service/unified_registry/unified.service'
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-non-pii-data1',
  templateUrl: './non-pii-data1.component.html',
  styleUrls: ['./non-pii-data1.component.scss']
})
export class NonPiiData1Component implements OnInit {
  nonPiiData: any;
 
  uuid = "";
  constructor( private unifiedService:UnifiedService,private route: ActivatedRoute,
    private router: Router,private toastr: ToastrService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    // this.uuid =  this.route.snapshot.paramMap.get('uuid');
    this.getNonPiiData1();
  }
  getNonPiiData1(){ 
    this.spinner.show()
    this.unifiedService.getNonPiiData1().subscribe((data:any)=>{
      this.nonPiiData=data.data
      console.log(this.nonPiiData)
      this.spinner.hide()
    },error =>{
       this.toastr.error(error.error.message,`Error`)
      })
      this.spinner.hide()
    }

    getNonSearchPiiData1(){ 
      this.spinner.show()
      this.unifiedService.getNonSearchPiiData1(this.uuid).subscribe((data:any)=>{
        this.nonPiiData=data.data
        console.log(this.nonPiiData)
        this.spinner.hide()
      },error =>{
         this.toastr.error(error.error.message,`Error`)
        })
        this.spinner.hide()
      }

    // nonPiiDataListByUuid(){ 
    //   this.spinner.show()
    //   this.uuid = this.uuid2
    //   this.unifiedService.getNonPiiData1Search(this.uuid).subscribe((data:any)=>{
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
