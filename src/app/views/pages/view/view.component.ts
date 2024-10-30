import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from 'src/app/views/pages/services/auth/auth.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  aadhaarNumber: any;
  piiData: any;
  nonPiidata1Aadhar: any;
  nonPiidata2Aadhar: any;
  address: any;
  address2: any;
  pincode1: any;
  pincode2: any;
  wardNo1: any;
  wardNo2: any;
  houseNo1: any;
  houseNo2: any;
  cardNo:any;
  rationCard: any;
  piiDataSearch: any;
  nonPiiData2Search: any;
  showNonPiiData1 = false;
  showNonPiiData2 =  false;
  piiData1: any;
  isAddressDiffrent = false;
  piiData2: any;
  piidataShow = false;
  piidata2Show= false;
  nid: any;
  aadhaarNo: any;
  mobileNumber: any;
  name: any;
  name2: any;
  mobileNumber2: any;
  aadhaarNo2: any;
  nid2: any;
  nidShow = true
  isAadhaarMached = true
  isMobileNumberMached = true
  isNameMached = false
  isaddress = false;
  isHouseNo = false;
  isWardNo = false;
 isIncome = false;
  nidCompare: any;
  nidCompare1: any;
  nameCompare: any;
  nameCompare2: any;
  singlePincode = false;
  addressCompare: any;
  address2Compare: any;
  income1: any;
  income2: any;
  headingText: string = 'Search Other Details';
  // cardTypes: string[] = [];
  cardType: string ='';
  showNoRecordFoundMessage: boolean;
  department: any;
  department2: any;
  gender1: any;
  gender2: any;
  fatherName1: any;
  guardianName1: any;
  isGender=false;
  isParent=false;
  departmentData=false;
  constructor(private router: Router, private route: ActivatedRoute, private authService:AuthService,private toastr: ToastrService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.aadhaarNumber = this.route.snapshot.paramMap.get('aadharNo')
    this.piiData_list();
  }
  
  resetSearch() {
    this.cardNo = ''; // Clear the search box value
    this.piiData_list(); // Load the initial data
  }
  back(){
   
    this.router.navigate(['/dashboard'])
  }
  clearSearch(){
    this.resetSearch();
  }

  piiData_list(){
    this.spinner.show();
    this.authService.getPiiData().subscribe((data:any)=>{
        this.piiData=data.data.piiData1
        this.piiData2=data.data.piiData2
        // this.nameCompare = this.piiData.name
        // this.nameCompare2 = this.piiData2.name
        // console.log("hii",this.nameCompare,this.nameCompare2)
        if(data.data.piiData1 !== null)
        {
          this.piidataShow = true
          this.aadhaarNo =data.data.piiData1.aadhaarNo
          this.name = data.data.piiData1.name
          this.department = data.data.piiData1.department
          if(this.department === 'D1') {
            this.department = 'Food And Supplies Department';
        }
        }
        if(data.data.piiData2 !== null)
        {
          this.piidata2Show = true
          this.aadhaarNo2 =data.data.piiData2.aadhaarNo
          this.name2 =data.data.piiData2.name
          this.department2 = data.data.piiData2.department
          if (this.department2 === 'D2') {
            this.department2 = 'Local Government Department';
          }
        }

        if(data.data.piiData1 !== null && data.data.piiData2== null)
        {
          this.departmentData= true
        }
        if(this.nidCompare1 === this.nidCompare){
          this.nidShow = false
        }
        if(this.aadhaarNo === this.aadhaarNo2){
          this.isAadhaarMached = false;
        }
        if(this.mobileNumber === this.mobileNumber2){
          this.isMobileNumberMached = false
        }
        console.log("hii",this.name,this.name2)
        if(this.name && this.name2){
          if(this.name === this.name2){
            this.isNameMached = true
          console.log(this.isNameMached)
          }
        }
        else{
          this.isNameMached = true
        }
        console.log(this.isNameMached)
       
        if(!data.data.piiData2){
          this.nidShow = false
          this.isAadhaarMached = false
          this.isNameMached = true
          this.isMobileNumberMached = false
        }
    if(data.data.nonPii1Data != null){
      this.showNonPiiData1 = true
      this.nonPiidata1Aadhar=data.data.nonPii1Data
      this.pincode1 = data.data.nonPii1Data.pincode
      this.gender1 = data.data.nonPii1Data.gender
      this.fatherName1 = data.data.nonPii1Data.fatherName 
    }
    if(data.data.nonPii2Data != null){
      this.showNonPiiData2 = true
      this.nonPiidata2Aadhar=data.data.nonPii2Data
      this.pincode2 = data.data.nonPii2Data.pincode
      this.gender2 = data.data.nonPii2Data.gender
      this.guardianName1 = data.data.nonPii2Data.guardianName
    }
    if(this.pincode1 === this.pincode2){
      this.singlePincode = true
    }
    if(this.pincode2 === null || this.pincode1 == null){
      this.singlePincode = true;
    }
    if(this.pincode1 === null || this.pincode2 == null){
      this.singlePincode = true;
    }
    if(this.gender1 === this.gender2){
      this.isGender = true
    }
    if(this.gender2 === null || this.gender1 == null){
      this.isGender = true;
    }
    if(this.gender2 === null || this.gender1 == null){
      this.isGender = true;
    }
    if(this.fatherName1 === this.guardianName1){
      this.isParent = true;
    }
    if(this.guardianName1 === null || this.fatherName1 == null){
      this.isParent = true;
    }
    if(this.fatherName1 === null || this.guardianName1 == null){
      this.isParent = true;
    }

    this.spinner.hide();
    },error =>{
      this.toastr.error(error.error.message,`Error`)
      })
      this.spinner.hide();
  }
  schemeCardList() {
    this.spinner.show();
    this.showNonPiiData1 = false;
    this.showNonPiiData2 = false;
  
    this.authService.getSearchSchemeCard(this.cardNo, this.cardType).subscribe(
      (data: any) => {
        this.headingText = 'Your Other Department Details';
        this.piiData = data.data.piiDataDTO;
        this.piiData2 = data.data.piiData2;
        this.piiData1 = data.data.piiDataDTO;
  
        if (data.data.nonPii1DataDTO != null) {
          this.showNonPiiData1 = true;
          this.isIncome = true;
          this.isWardNo = true;
          this.isAddressDiffrent = true;
          this.isHouseNo = true;
          this.singlePincode = true;
          this.nonPiidata1Aadhar = data.data.nonPii1DataDTO;
        }
  
        if (data.data.nonPii2DataDTO != null) {
          this.showNonPiiData2 = true;
          this.isIncome = true;
          this.isWardNo = true;
          this.isAddressDiffrent = true;
          this.isHouseNo = true;
          this.singlePincode = true;
          this.nonPiidata2Aadhar = data.data.nonPii2DataDTO;
        }
  
        this.showNoRecordFoundMessage = false; // Add this line
        this.spinner.hide();
      },
      (error) => {
        if (error.status === 400 && error.error.message === 'No Record Found.') {
          this.showNoRecordFoundMessage = true; // Add this line
        } else {
          this.toastr.error(error.error.message, 'Error');
        }
  
        this.spinner.hide();
      }
    );
  }
  
  
    searchData() {
      if (this.cardType === 'rationCard') {
          this.schemeCardList();
      } else if (this.cardType === 'schemeCard') {
          this.schemeCardList();
      }
  }

  downloadDocument(filename: string): void {   
    this.spinner.show();
    this.authService.downloadCertificate(filename).subscribe(
      (data: Blob) => {
        this.toastr.success('Download Successfull', 'Success');
        this.spinner.hide();
        this.download(data, filename); // Trigger the download
      },
      (error) => {
        this.toastr.error(error.error.message, 'Error');
        this.spinner.hide();
      }
    );
  }
  
  download(blob: Blob, filename: string): void {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }


}
