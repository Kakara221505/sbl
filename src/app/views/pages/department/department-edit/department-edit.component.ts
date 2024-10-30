import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentServicesService } from 'src/app/views/services/department/department-services.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.scss']
})
export class DepartmentEditComponent implements OnInit {
  id: any;
  departmentData: any;
  aadhaarNo: any;
    accountNumber: any;
    address: any;
    availingPension: any;
    bankBranch: any;
    bankName: any;
    electoralCardNo: any;
    houseNumber: any;
    ifsc: any;
    income: any;
    mobileNumber: any;
    name: any;
    nid: any;
    payingIt: any;
    pincode: any;
    possessingEPF: any;
    postOffice: any;
    rationCardNo: any;
    wardMember: any;
    wardName: any;
    wardNumber: any;
  data: any;

  constructor(private route: ActivatedRoute,
    private router: Router, private departmentService: DepartmentServicesService,private toastr: ToastrService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.aadhaarNo)
    this.getIdDepartment();
  }
  cancel(){
    this.router.navigate(['/department1/list'])
  }

  
  getIdDepartment(){
    this.spinner.show();
    this.departmentService.departmentgetId(this.id).subscribe((data:any)=>{  
      this.departmentData = data.data
      this.id =  this.departmentData.id
      this.aadhaarNo = this.departmentData.aadhaarNo
      this.accountNumber = this.departmentData.accountNumber
      this.address = this.departmentData.address
      this.availingPension = this.departmentData.availingPension
      this.bankBranch = this.departmentData.bankBranch
      this.name = this.departmentData.name
      this.bankName = this.departmentData.bankName
      this.electoralCardNo = this.departmentData.electoralCardNo
      this.houseNumber = this.departmentData.houseNumber
      this.ifsc = this.departmentData.ifsc
      this.income = this.departmentData.income
      this.mobileNumber = this.departmentData.mobileNumber
      this.nid = this.departmentData.nid
      this.payingIt = this.departmentData.payingIt
      this.possessingEPF = this.departmentData.possessingEPF
      this.pincode = this.departmentData.pincode
      this.postOffice = this.departmentData.postOffice
      this.rationCardNo = this.departmentData.rationCardNo
      this.wardName = this.departmentData.wardName
      this.wardMember=this.departmentData.wardMember
      this.wardNumber=this.departmentData.wardNumber  
      this.spinner.hide();
      console.log(this.payingIt)
      console.log(this.possessingEPF)
      console.log(this.availingPension)
      if(this.payingIt ==='YES'){
        this.payingIt= "Yes"
      }
      if(this.payingIt ==='NO'){
        this.payingIt= "No"
      }
      if(this.possessingEPF ==='YES'){
        this.possessingEPF= "Yes"
      }
      if(this.possessingEPF ==='NO'){
        this.possessingEPF= "No"
      }
      if(this.availingPension ==='YES'){
        this.availingPension= "Yes"
      }
      if(this.availingPension ==='NO'){
        this.availingPension= "No"
      }
    },error =>{
      this.toastr.error,(error.error.message,`Error`)
      })
  }
  departEditForm(){
    this.spinner.show();
      let body = {
        id : this.id,
        aadhaarNo :this.aadhaarNo,
        accountNumber:this.accountNumber,
        address:this.address,
        availingPension:this.availingPension,
        bankBranch:this.bankBranch,
        bankName:this.bankName,
        electoralCardNo:this.electoralCardNo,
        houseNumber: this.houseNumber,
        ifsc:this.ifsc,
        income:this.income,
        mobileNumber:this.mobileNumber,
        name:this.name,
        nid:this.nid,
        payingIt:this.payingIt,
        pincode:this.pincode,
        possessingEPF:this.possessingEPF,
        postOffice: this.postOffice,
        rationCardNo:this.rationCardNo,
        wardMember:this.wardMember,
        wardName: this.wardName,
        wardNumber:this.wardNumber,
      };
      this.departmentService.deparmentEdit(body).subscribe((res:any)=>{
        this.data=res.data
        
        this.toastr.success('Department 1 Data Edited Successfully', 'Success');
        this.spinner.hide();
        this.router.navigate(['/department1/list'])
      },error =>{
        this.toastr.error(error.error.message,`Error`,{
          timeOut:3000
        })
        })
    }
  }
