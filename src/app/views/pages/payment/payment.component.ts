import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder} from "@angular/forms";
import {ActivatedRoute,Router} from '@angular/router'
import {ToastrService} from 'ngx-toastr'
import {UnifiedService } from '../service/unified_registry/unified.service'
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  p:number = 1;
  page: number = 10;
  tableSizes: any = [10, 50, 100];
  count!: number;
  type:any;
  paymentToken: any;
  paymentRewardData: any;
  paymentList1: any;
  tokenValue: any;
  value: any;
  copyArr: any;

  constructor(private unifiedService:UnifiedService,private route: ActivatedRoute,
    private router: Router,private toastr: ToastrService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.payment()
  }

  payment() {
    this.spinner.show();
    this.unifiedService.paymentList(this.p-1,this.page).subscribe((data: any) => {
      this.paymentList1= data.data.totalNoOfRectification
      this.paymentToken= data.data.totalNoOfToken
      this.paymentRewardData= data.data.rewardData
      this.tokenValue= data.data.tokenValue
      this.copyArr = data.data.totalElement
      console.log(this.copyArr)
      console.log(this.paymentList1)
      this.spinner.hide();
    },error =>{
      this.toastr.error(error.error.message,`Error`)
     })
    }
  paymentByType() {
    this.spinner.show();
    this.type = this.type
    this.unifiedService.paymentListBy(this.p-1,this.page,this.type).subscribe((data: any) => {
      this.paymentList1= data.data.totalNoOfRectification
      console.log(this.paymentList1)
      this.paymentToken= data.data.totalNoOfToken
      this.paymentRewardData= data.data.rewardData
      this.tokenValue= data.data.tokenValue
      this.copyArr = data.data.totalElement

      console.log(this.paymentList1)
      this.spinner.hide();
    },error =>{
      this.toastr.error(error.error.message,`Error`)
     })
    }

    changeValue(){
      this.value = this.value
      this.unifiedService.tokenValueChange(this.value).subscribe((data: any) => {
        this.payment();
        this.toastr.success(`Token rupees exchange rate changed Successfully`,`Success`)
    })
  }

    changeValue2(){
      this.value = this.value
      this.unifiedService.tokenValueChange(this.value).subscribe((data: any) => {
        this.toastr.success(`Token rupees exchange rate changed  Successfully`,`Success`)
       this.paymentByType();
    })
  }
}
