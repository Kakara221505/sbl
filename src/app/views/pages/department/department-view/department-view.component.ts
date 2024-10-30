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
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.scss']
})
export class DepartmentViewComponent implements OnInit {
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
  requestFrom :string = "department1"
  reasonForRequest: any;
  status: any;
  village: any;
  wardNo: any;
  talukSupplyOffice: any;
  taluk: any;
  sectionCode: any;
  schemeCardNo: any;
  rationShop: any;
  noOfCylinder: any;
  municipality: any;
  mobileNo: any;
  lpgConnection: any;
  houseElectrified: any;
  consumerNo: any;
  agency: any;
  company: any;
  pinCode: any;
  showDepartment1 = false;
  showDepartment2 = false;
  comment: any;
  aadhaarNo2: any;
  address2: any;
  name2: any;
  nid2: any;
  wardNo2: any;
  mobileNo2: any;
  houseNumber2: any;
  pinCode2: any;
  constructor(private route: ActivatedRoute,
    private router: Router, private departmentService: DepartmentServicesService,private toastr: ToastrService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.viewDepartment()
  }


  cancel(){  
    this.router.navigate(['/department1/list'])
  }
  viewDepartment(){
    this.spinner.show();
    this.departmentService.departmentViewId(this.id).subscribe((data:any)=>{   
      this.departmentData = data.data
       console.log(this.departmentData)
      if(data.data != null){
      this.showDepartment1 = true;
      this.aadhaarNo = this.departmentData.aadhaarNo
      this.address = this.departmentData.address
      this.name = this.departmentData.name
      this.nid = this.departmentData.nid
      this.accountNumber = this.departmentData.accountNumber
      this.availingPension = this.departmentData.availingPension
      this.bankBranch = this.departmentData.bankBranch
      this.bankName = this.departmentData.bankName
      this.electoralCardNo = this.departmentData.electoralCardNo
      this.houseNumber = this.departmentData.houseNumber
      this.ifsc = this.departmentData.ifsc
      this.income = this.departmentData.income
      this.mobileNumber = this.departmentData.mobileNumber
      this.payingIt = this.departmentData.payingIt
      this.possessingEPF = this.departmentData.possessingEPF
      this.pincode = this.departmentData.pincode
      this.postOffice = this.departmentData.postOffice
      this.rationCardNo = this.departmentData.rationCardNo
      this.wardName = this.departmentData.wardName
      this.wardMember=this.departmentData.wardMember
      this.wardNumber=this.departmentData.wardNumber
      this.status = this.departmentData.requestStatus
      this.comment = this.departmentData.comment
      }

      //  get department 2 data //
      if(data.data.department2Data != null){
        this.showDepartment2 = true;
        this.aadhaarNo2 = data.data.department2Data.aadhaarNo
        this.address2 = data.data.department2Data.address
        this.name2 = data.data.department2Data.name
        this.nid2 = data.data.department2Data.nid
        this.wardNo2 = data.data.department2Data.wardNo
        this.agency = data.data.department2Data.agency
        this.company =data.data.department2Data.company
        this.consumerNo = data.data.department2Data.consumerNo
        this.houseElectrified = data.data.department2Data.houseElectrified
        this.houseNumber2 = data.data.department2Data.houseNumber
        this.lpgConnection = data.data.department2Data.lpgConnection
        this.mobileNo2 = data.data.department2Data.mobileNo
        this.municipality = data.data.department2Data.municipality
        this.name2 = data.data.department2Data.name
        this.nid2 = data.data.department2Data.nid
        this.noOfCylinder = data.data.department2Data.noOfCylinder
        this.pinCode2 =data.data.department2Data.pinCode
        this.rationShop = data.data.department2Data.rationShop
        this.schemeCardNo =data.data.department2Data.schemeCardNo
        this.sectionCode = data.data.department2Data.sectionCode
        this.taluk = data.data.department2Data.taluk
        this.talukSupplyOffice = data.data.department2Data.talukSupplyOffice
        this.village = data.data.department2Data.village
        this.wardNo2 = data.data.department2Data.wardNo
      }
      this.spinner.hide()
    },error =>{
      this.toastr.error(error.error.message,`Error`)
    })
  }
  getDataFromDepartmen2(){
    let body = {
      aadhaarNo :this.aadhaarNo,
      requestFrom:this.requestFrom,
      reasonForRequest:this.reasonForRequest
    };
    this.departmentService.department2Getdata(body).subscribe((data:any)=>{  
      this.status = data.data.status
      console.log(this.status)
    }) 
  };
}



