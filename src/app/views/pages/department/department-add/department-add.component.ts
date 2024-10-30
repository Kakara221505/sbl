import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentServicesService } from 'src/app/views/services/department/department-services.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";

import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.scss']
})
export class DepartmentAddComponent implements OnInit {

  filter = {
    aadhaarNo: "",
    accountNumber: "",
    address: "",
    availingPension: "",
    bankBranch: "",
    bankName: "",
    electoralCardNo: "",
    houseNumber: "",
    ifsc: "",
    income: "",
    mobileNumber: "",
    name: "",
    nid: "",
    payingIt: "",
    pincode: "",
    possessingEPF: "",
    postOffice: "",
    rationCardNo: "",
    wardMember: "",
    wardName: "",
    wardNumber: "",
  }
  constructor(private route: ActivatedRoute,
    private router: Router, private departmentService: DepartmentServicesService,private spinner: NgxSpinnerService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  cancel() {
    this.router.navigate(['/department1/list'])
  }


  departmentAddForm() {
    this.spinner.show();
    let data2 = {
      aadhaarNo: this.filter.aadhaarNo,
      accountNumber: this.filter.accountNumber,
      address: this.filter.address,
      availingPension: this.filter.availingPension,
      bankBranch: this.filter.bankBranch,
      bankName: this.filter.bankName,
      electoralCardNo: this.filter.electoralCardNo,
      houseNumber: this.filter.houseNumber,
      ifsc: this.filter.ifsc,
      income: this.filter.income,
      mobileNumber: this.filter.mobileNumber,
      name: this.filter.name,
      nid: this.filter.nid,
      payingIt: this.filter.payingIt,
      pincode: this.filter.pincode,
      possessingEPF: this.filter.possessingEPF,
      postOffice: this.filter.postOffice,
      rationCardNo: this.filter.rationCardNo,
      wardMember: this.filter.wardMember,
      wardNumber: this.filter.wardNumber,
      wardName: this.filter.wardName,
    };
    this.departmentService.department_1Add(data2).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/department1/list'])
      this.spinner.hide();
      this.toastr.success('Department 1 Data Added Successfully', 'Success');
    },error =>{
      this.spinner.hide();
      this.toastr.error(error.error.message,`Error`,{
        timeOut:3000
      })
    })
  }

}


