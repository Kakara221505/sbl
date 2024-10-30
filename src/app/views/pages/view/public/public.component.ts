import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  basicModalCloseResult:any;
  amount: any;
  modalReference: NgbModalRef;
  userToken: any;
  userTokenValue: any;
  user: number;
  electricity: any;
  water: any;
  electricityRemaining: any;
  waterRemaining: any;
 
  constructor(private modalService: NgbModal,private router: Router, private route: ActivatedRoute, private authService:AuthService,private toastr: ToastrService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.allToken_list();
    
  }

  back(){
    this.router.navigate(['/dashboard']);
  }
  allToken_list(){
    this.spinner.show();
    this.authService.getUserToken().subscribe((data:any)=>{
      this.userToken=data.data.token
      this.userTokenValue=data.data.tokenValue
      this.user = this.userToken / this.userTokenValue
      console.log(this.user)
      console.log(this.userToken)
      console.log(this.userTokenValue)
      this.billvalue();
      this.spinner.hide();
    },error =>{
      this.toastr.error(error.error.message,`Error`)
      })
     
    }  
  openBasicModal(content: any) {
    this.spinner.show();
    this.modalReference = this.modalService.open(content, {})
    this.modalReference.result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {});
    this.spinner.hide();
    
  }

  billvalue(){
    this.spinner.show();
    this.authService.getBill().subscribe((data:any)=>{
      this.electricity = (data.data.electricity).toFixed(2)
      this.water = (data.data.water).toFixed(2)
      console.log(this.electricity)
      console.log(this.water)
      console.log(this.user)
      this.electricityRemaining = (this.electricity - this.user).toFixed(2)
      this.waterRemaining = (this.water - this.user).toFixed(2)
      if(this.waterRemaining < 0){
        this.waterRemaining = 0;
      }
      if(this.electricityRemaining < 0){
        this.electricityRemaining = 0;
      }
      console.log(this.electricityRemaining)
      console.log(this.waterRemaining)
     
    })
    }
  payment(){
    this.spinner.show();
    this.authService.userPayment(this.electricityRemaining).subscribe((data:any)=>{
      this.toastr.success('You have successfully paid your electricity bill','Success')
      this.modalReference.close(); 
      location.reload();
    },error =>{
      this.toastr.error(error.error.message,`Error`)
     })
     this.spinner.hide();
     this.billvalue()
  }
  paymentWater(){
    this.spinner.show();
    this.authService.userPaymentWater(this.waterRemaining).subscribe((data:any)=>{
      this.toastr.success('You Have Successfully paid your water bill','Success')
      this.modalReference.close(); 
      location.reload();
    },error =>{
      this.toastr.error(error.error.message,`Error`)
     })
     this.spinner.hide();
     this.billvalue()
  }

 
}
