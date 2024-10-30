import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder} from "@angular/forms";
import {ActivatedRoute,Router} from '@angular/router'
import {ToastrService} from 'ngx-toastr'
import {UnifiedService } from '../../service/unified_registry/unified.service'
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-pii-data',
  templateUrl: './pii-data.component.html',
  styleUrls: ['./pii-data.component.scss']
})
export class PiiDataComponent implements OnInit {
  piidata: any;
  aadhaarNo = "";
  piidataAadhar: any;
  data2: any;
  piidaata2: any;

  constructor( private unifiedService:UnifiedService,private route: ActivatedRoute,
    private router: Router,private toastr: ToastrService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
   
      // this.aadhaarNumber = this.route.snapshot.paramMap.get('aadharNo');
      
      this.piiDataList();
  }

  piiDataList(){   
    this.spinner.show()
    this.unifiedService.getPiiData(this.aadhaarNo).subscribe((data:any)=>{
      this.piidata=data.data
      console.log(this.piidata)     
      this.spinner.hide() 
    },error =>{
       this.toastr.error(error.error.message,`Error`)
      })
      this.spinner.hide() 
    }

  // piiDataListByAadhar(){ 
  //   this.spinner.show()
  //   this.aadhaarNo = this.aadhaarNumber
  //   this.unifiedService.getPiiDataByAadhar(this.aadhaarNo).subscribe((data:any)=>{
  //     this.piidata=data.data
  //     this.piiDataList();
  //     console.log(this.piidata)
  //     this.toastr.success('Data Found Successfull',`Sucess`)
  //     this.spinner.hide() 
      
  //   },error =>{
  //      this.toastr.error(error.error.message,`Error`)
  //     })
  //     this.spinner.hide() 
  //   }

}
