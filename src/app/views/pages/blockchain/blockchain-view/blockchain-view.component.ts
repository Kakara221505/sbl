import { Component, OnInit } from '@angular/core';
import { UnifiedService } from '../../service/unified_registry/unified.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-blockchain-view',
  templateUrl: './blockchain-view.component.html',
  styleUrls: ['./blockchain-view.component.scss'],
})
export class BlockchainViewComponent implements OnInit {
  allBlockdataAadhar: any;
  aadhaarNumber: any;
  nonPiidata1Aadhar: any;
  nonPiidata2Aadhar: any;
  showNonPiiData1 = false;
  showNonPiiData2 = false;
  nonPiidata1AadharAddress: any;
  nonPiidata2AadharAddress: any;
  addressMatched = false;
  pinCode: any;
  pinCode2: any;
  pinCodeCommon: any;
  houseNOCommon: any;
  piiData: any;
  pincode1: any;
  pincode2: any;
  piiDataSearch: any;
  nonPiiData2Search: any;
  piiData1: any;
  isAddressDiffrent = false;
  piiData2: any;
  piidataShow = false;
  piidata2Show = false;
  nid: any;
  aadhaarNo: any;
  mobileNumber: any;
  name: any;
  name2: any;
  mobileNumber2: any;
  aadhaarNo2: any;
  singlePincode = false;
  fatherNameCommon: any;
  genderCommon: any;
  gender1: any;
  fatherName1: any;
  gender2: any;
  guardianName1: any;
  isGender = false;
  isParent = false;

  constructor(
    private unifiedService: UnifiedService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.aadhaarNumber = this.route.snapshot.paramMap.get('aadharNo');
    this.allBlockChainDataListByAadhar();
  }
  back() {
    this.router.navigate(['blockchain']);
  }

  // compareAddresses(address1: string, address2: string): boolean {
  //   const normalizedAddress1 = this.normalizeAddress(address1);
  //   const normalizedAddress2 = this.normalizeAddress(address2);

  //   const words1 = normalizedAddress1.split(' ');
  //   const words2 = normalizedAddress2.split(' ');

  //   return words1.every(word => words2.includes(word));
  // }

  // normalizeAddress(address: string): string {
  //   return address.toUpperCase().replace(/[^\w\s]/g, '').trim();
  // }

  allBlockChainDataListByAadhar() {
    this.spinner.show();
    this.unifiedService
      .getAllBlockChainDataByAadhar(this.aadhaarNumber)
      .subscribe(
        (data: any) => {
          // pii data all start
          this.allBlockdataAadhar = data.data.blockChainData;
          this.nonPiidata1Aadhar = data.data.nonPii1Data;
          this.nonPiidata2Aadhar = data.data.nonPii2Data;

          if (
            this.nonPiidata1Aadhar != null &&
            this.nonPiidata2Aadhar != null
          ) {
           
            if (
              data.data.nonPii1Data.pincode === data.data.nonPii2Data.pincode &&
              data.data.nonPii1Data.fatherName.toLowerCase() ===
                data.data.nonPii2Data.guardianName.toLowerCase() &&
              data.data.nonPii1Data.gender.toLowerCase() ===
                data.data.nonPii2Data.gender.toLowerCase()
            ) {
              console.log('hii');
              this.addressMatched = true;
              this.pinCodeCommon = data.data.nonPii1Data.pincode;
              this.fatherNameCommon = data.data.nonPii1Data.fatherName;
              this.genderCommon = data.data.nonPii1Data.gender;
            }
            //   if((data.data.nonPii1Data.wardNo) === (data.data.nonPii2Data.wardNo)){
            //       this.addressMatched = true
            //       this.wardNoCommon = data.data.nonPii1Data.wardNo
            //     }
            //   if((data.data.nonPii1Data.address) === (data.data.nonPii2Data.address)){
            //     this.addressMatched = true
            //     this.addressCommon = data.data.nonPii1Data.address
            //   }
            // if((data.data.nonPii1Data.pincode) === (data.data.nonPii2Data.pinCode)){
            //     this.addressMatched = true
            //     this.pinCodeCommon = data.data.nonPii1Data.pincode
            //   }
            // if((data.data.nonPii1Data.houseNumber) === (data.data.nonPii1Data.houseNumber)){
            //     this.addressMatched = true
            //     this.houseNOCommon = data.data.nonPii1Data.houseNumber
            //   }
          }

          if (data.data.nonPii1Data != null) {
            this.showNonPiiData1 = true;
            this.nonPiidata1Aadhar = data.data.nonPii1Data;
            this.pincode1 = data.data.nonPii1Data.pincode;
            this.gender1 = data.data.nonPii1Data.gender;
            this.fatherName1 = data.data.nonPii1Data.fatherName;
          }
          if (data.data.nonPii2Data != null) {
            this.showNonPiiData2 = true;
            // this.nonPiidata2Aadhar=data.data.nonPii2Data
            // this.address2 = data.data.nonPii2Data.address
            this.pincode2 = data.data.nonPii2Data.pincode;
            this.gender2 = data.data.nonPii2Data.gender;
            this.guardianName1 = data.data.nonPii2Data.guardianName;
          }
          if (this.pincode1 === this.pincode2) {
            this.singlePincode = true;
          }
          if (this.pincode2 === null || this.pincode1 == null) {
            this.singlePincode = true;
          }
          if (this.pincode1 === null || this.pincode2 == null) {
            this.singlePincode = true;
          }
          if (this.gender1 === this.gender2) {
            this.isGender = true;
          }
          if (this.gender2 === null || this.gender1 == null) {
            this.isGender = true;
          }
          if (this.gender1 === null || this.gender2 == null) {
            this.isGender = true;
          }
          if (this.fatherName1 === this.guardianName1) {
            this.isParent = true;
          }
          if (this.guardianName1 === null || this.fatherName1 == null) {
            this.isParent = true;
          }
          if (this.fatherName1 === null || this.guardianName1 == null) {
            this.isParent = true;
          }

          this.spinner.hide();
        },
        (error) => {
          this.toastr.error(error.error.message, `Error`);
        }
      );
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
}
