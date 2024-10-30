import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { UnifiedService } from '../../service/unified_registry/unified.service'
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent implements OnInit {
 showNonPiiData1 = false;
  showNonPiiData2 =  false;
  income2: any;
  isAddressDiffrent = false;
  isGender = false;
  isSpecialCategory = false;
 singlePincode = false;
 isParent =false;
  aadhaarNumber: any;
  alldataAadhar: any;
  nonPiidata1Aadhar: any;
  spouseName: any;
  fatherName: any;
  motherName: any;
  relationshipWithHeadOfFamily: any;
  age: any;
  dateOfbirth: any;
  gender: any;
  nationality: any;
  occupation: any;
  documentType: any;
  documentIssueDate: any;
  documentNumber: any;
  mnrega: any;
  mnregaCardNo: any;
  criticalIllness: any;
  criticalIllnessType: any;
  criticalIllnessSince: any;
  casteType: any;
  birthCertificate: any;
  casteDocument: any;
  criticalIllnessCertificate: any;
  anyDisability: any;
  disabilityType: any;
  disabilityCause: any;
  disabilityPercentage: any;
  specialCategory: any;
  bankName: any;
  bankDistrict: any;
  bankState: any;
  bankAccountNumber: any;
  branchName: any;
  houseNo: any;
  cardType: any;
  houseName: any;
  lankmark: any;
  locality: any;
  colony: any;
  village: any;
  townName: any;
  taluka: any;
  tehsil: any;
  subDistrict: any;
  district: any;
  state: any;
  block: any;
  pincode: any;
  city: any;
  houseOrShopNo: any;
  buildingOrColonyName: any;
  streetName: any;
  localityOrMohalla: any;
  pincode1: any;
  propertyId: any;
  surveyId: any;
  yearOfCreationOfProperty: any;
  type: any;
  propertyType: any;
  vasikaNo: any;
  vasikaDate: any;
  allotmentDate: any;
  allotmentNo: any;
  businessName: any;
  remark: any;
  inflammableMaterialStoredInYourProperty: any;
  propertyMoreThan36FT: any;
  yards: any;
  ownerShip: any;
  gender1: any;
  mobileNo: any;
  guardianName: any;
  relationship: any;
  specialCategory1: any;
  emailId: any;
  ownershipPercentage: any;
  address: any;
  aadhaarNo: any;
  registeredWill: any;
  memberName: any;
  disabilityCertificate: any;
  mnregaCard: any;
  addressProof: any;
  usasgeProof: any;

  constructor(private unifiedService: UnifiedService, private route: ActivatedRoute,
    private router: Router, private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.aadhaarNumber = this.route.snapshot.paramMap.get('aadharNo')
    this.allDataListByAadhar();
  }
  back() {
    this.router.navigate(['pii/data'])
  }
  allDataListByAadhar() {
    this.spinner.show()
    this.unifiedService.getAllDataByAadhar(this.aadhaarNumber).subscribe((data: any) => {
      // pii data all start
      this.alldataAadhar = data.data.piiData
      this.nonPiidata1Aadhar = data.data.nonPii1Data
      // this.uuid1= data.data.nonPii1Data.uuid
      if (data.data.nonPii1Data != null) {
        this.showNonPiiData1 = true;
        // this.memberName=data.data.nonPiiData.memberName
        this.spouseName = data.data.nonPii1Data.spouseName;
        this.fatherName = data.data.nonPii1Data.fatherName;
        this.motherName = data.data.nonPii1Data.motherName;
        this.relationshipWithHeadOfFamily = data.data.nonPii1Data.relationshipWithHeadOfFamily;
        this.age = data.data.nonPii1Data.age;
        this.dateOfbirth = data.data.nonPii1Data.dateOfbirth;
        this.gender = data.data.nonPii1Data.gender;
        this.nationality = data.data.nonPii1Data.nationality;
        this.occupation = data.data.nonPii1Data.occupation;
        this.documentType = data.data.nonPii1Data.documentType;
        this.documentIssueDate = data.data.nonPii1Data.documentIssueDate;
        this.documentNumber = data.data.nonPii1Data.documentNumber;
        this.mnrega = data.data.nonPii1Data.mnrega;
        this.mnregaCardNo = data.data.nonPii1Data.mnregaCardNo;
        this.criticalIllness = data.data.nonPii1Data.criticalIllness;
        this.criticalIllnessType = data.data.nonPii1Data.criticalIllnessType;
        this.criticalIllnessSince = data.data.nonPii1Data.criticalIllnessSince;
        this.casteType = data.data.nonPii1Data.casteType;
        this.birthCertificate = data.data.nonPii1Data.birthCertificate;
        this.criticalIllnessCertificate = data.data.nonPii1Data.criticalIllnessCertificate;
        this.anyDisability = data.data.nonPii1Data.anyDisability;
        this.disabilityType = data.data.nonPii1Data.disabilityType;
        this.disabilityCause = data.data.nonPii1Data.disabilityCause;
        this.disabilityPercentage = data.data.nonPii1Data.disabilityPercentage;
        this.specialCategory = data.data.nonPii1Data.specialCategory;
        this.bankName = data.data.nonPii1Data.bankName;
        this.bankDistrict = data.data.nonPii1Data.bankDistrict;
        this.bankState = data.data.nonPii1Data.bankState;
        this.bankAccountNumber = data.data.nonPii1Data.bankAccountNumber;
        this.branchName = data.data.nonPii1Data.branchName;
        this.cardType = data.data.nonPii1Data.cardType;
        this.houseNo = data.data.nonPii1Data.houseNo;
        this.houseName = data.data.nonPii1Data.houseName;
        this.lankmark = data.data.nonPii1Data.lankmark;
        this.locality = data.data.nonPii1Data.locality;
        this.colony = data.data.nonPii1Data.colony;
        this.village = data.data.nonPii1Data.village;
        this.townName = data.data.nonPii1Data.townName;
        this.taluka = data.data.nonPii1Data.taluka;
        this.tehsil = data.data.nonPii1Data.tehsil;
        this.subDistrict = data.data.nonPii1Data.subDistrict;
        this.district = data.data.nonPii1Data.district;
        this.state = data.data.nonPii1Data.state;
        this.block = data.data.nonPii1Data.block;
        this.pincode = data.data.nonPii1Data.pincode;
        this.disabilityCertificate = data.data.nonPii1Data.disabilityCertificate
        this.casteDocument = data.data.nonPii1Data.casteDocument
        this.mnregaCard = data.data.nonPii1Data.mnregaCard


        console.log(this.casteDocument)
    
      }
      
      if (data.data.nonPii2Data != null) {
        this.showNonPiiData2 = true;
        this.city = data.data.nonPii2Data.city;
        this.houseOrShopNo = data.data.nonPii2Data.houseOrShopNo;
        this.buildingOrColonyName = data.data.nonPii2Data.buildingOrColonyName;
        this.streetName = data.data.nonPii2Data.streetName;
        this.localityOrMohalla = data.data.nonPii2Data.localityOrMohalla;
        this.pincode1 = data.data.nonPii2Data.pincode;
        this.propertyId = data.data.nonPii2Data.propertyId;
        this.surveyId = data.data.nonPii2Data.surveyId;
        this.yearOfCreationOfProperty = data.data.nonPii2Data.yearOfCreationOfProperty;
        this.type = data.data.nonPii2Data.type;
        this.propertyType = data.data.nonPii2Data.propertyType;
        this.vasikaNo = data.data.nonPii2Data.vasikaNo;
        this.vasikaDate = data.data.nonPii2Data.vasikaDate;
        this.allotmentNo = data.data.nonPii2Data.allotmentNo;
        this.allotmentDate = data.data.nonPii2Data.allotmentDate;
        this.businessName = data.data.nonPii2Data.businessName;
        this.remark = data.data.nonPii2Data.remark;
        this.inflammableMaterialStoredInYourProperty = data.data.nonPii2Data.inflammableMaterialStoredInYourProperty;
        this.propertyMoreThan36FT = data.data.nonPii2Data.propertyMoreThan36FT;
        this.yards = data.data.nonPii2Data.yards;
        this.ownerShip = data.data.nonPii2Data.ownerShip;
        this.gender1 = data.data.nonPii2Data.gender;
        this.mobileNo = data.data.nonPii2Data.mobileNo;
        this.guardianName = data.data.nonPii2Data.guardianName;
        this.relationship = data.data.nonPii2Data.relationship;
        this.specialCategory1 = data.data.nonPii2Data.specialCategory;
        this.emailId = data.data.nonPii2Data.emailId;
        this.ownershipPercentage = data.data.nonPii2Data.ownershipPercentage;
        this.address = data.data.nonPii2Data.address;
        this.aadhaarNo = data.data.nonPii2Data.aadhaarNo;
        this.registeredWill = data.data.nonPii2Data.registeredWill;
        this.addressProof = data.data.nonPii2Data.addressProof
        this.usasgeProof = data.data.nonPii2Data.usageProof
      }
      

      
      if(this.pincode === this.pincode1){
        this.singlePincode = true
      }
      if(this.pincode1 === null || this.pincode == null){
        this.singlePincode = true;
      }
      if(this.pincode === null || this.pincode1 == null){
        this.singlePincode = true;
      }

      if(this.gender === this.gender1){
        this.isGender = true
      }
      if(this.gender1 === null || this.gender == null){
        this.isGender = true;
      }
      if(this.gender === null || this.gender1 == null){
        this.isGender = true;
      }

      if(this.fatherName === this.guardianName){
        this.isParent = true
      }
      if(this.guardianName === null || this.fatherName == null){
        this.isParent = true;
      }
      if(this.fatherName === null || this.guardianName == null){
        this.isParent = true;
      }

      // if((data.data.nonPii1Data.address != null) == (data.data.nonPii2Data.address === null)){
      //   this.isAddressDiffrent = true;
      //   console.log(this.isAddressDiffrent)
      // }
     

    }, error => {
      this.toastr.error(error.error.message, `Error`)
    })
  }
  // Inside your ViewAllComponent class
// Inside your ViewAllComponent class
public isMismatched(fieldName: string): boolean {
  if (this.alldataAadhar && this.alldataAadhar.length >= 2) {
    const data1 = this.alldataAadhar[0];
    const data2 = this.alldataAadhar[1];

    // Check if the corresponding fields in the two rows don't match
    if (data1 && data2) {
      const name1 = data1[fieldName] ? data1[fieldName].trim().toLowerCase() : '';
      const name2 = data2[fieldName] ? data2[fieldName].trim().toLowerCase() : '';

      if (name1 !== name2) {
        return true; // There's a mismatch
      }
    }
  }

  return false; // Match found or insufficient data
}


downloadDocument(filename: string): void {   
  this.spinner.show();
  this.unifiedService.downloadCertificate(filename).subscribe(
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

getDepartmentName(departmentCode: string): string {
  switch (departmentCode) {
    case 'D1':
      return 'Food And Supplies Department';
    case 'D2':
      return 'Local Government Department';
    default:
      return '';
  }
}

  

}
