import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department2Service } from 'src/app/views/services/department2/department2.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-department2-view',
  templateUrl: './department2-view.component.html',
  styleUrls: ['./department2-view.component.scss']
})
export class Department2ViewComponent implements OnInit {
  id: string | null;
  department2Data: any;

  // Define variables corresponding to HTML elements
  city: string = "-";
  houseOrShopNo: string = "-";
  buildingOrColonyName: string = "-";
  streetName: string = "-";
  localityOrMohalla: string = "-";
  pincode: string = "-";
  propertyId: string = "-";
  surveyId: string = "-";
  yearOfCreationOfProperty: string = "-";
  type: string = "-";
  propertyType: string = "-";
  vasikaNo: string = "-";
  vasikaDate: string = "-";
  allotmentNo: string = "-";
  allotmentDate: string = "-";
  businessName: string = "-";
  remark: string = "-";
  inflammableMaterialStoredInYourProperty: string = "-";
  propertyMoreThan36FT: string = "-";
  yards: string = "-";
  ownerShip: string = "-";
  nameOfOwner: string = "-";
  gender: string = "-";
  mobileNo: string = "-";
  guardianName: string = "-";
  relationship: string = "-";
  specialCategory: string = "-";
  emailId: string = "-";
  ownershipPercentage: string = "-";
  address: string = "-";
  addressProof: string = "-";
  aadhaarNo: string = "-";
  registeredWill: string = "-";
  usageProof: string = "-";
  requestFrom :string = "department2"
  reasonForRequest: any;
  status: any;
  birthData="birthCertificate";
  mnregaData="Mnrega";
  specialCategoryData="specialCategory";
  bankData="bank";
  addressData="address";
  birthCertificateRequestStatus: any;
  mnregaRequestStatus: any;
  specialCategoryRequestStatus: any;
  bankRequestStatus: any;
  addressRequestStatus: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private departmentService: Department2Service,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getIdDepartment2();
  }

  cancel() {
    this.router.navigate(['/department2/list'])
  }

  getIdDepartment2() {
    this.spinner.show();
    this.departmentService.department2ViewId(this.id).subscribe((data: any) => {
      this.department2Data = data.data;

      // Assign values to variables, if null, assign "-"
      this.city = this.department2Data.city || "-";
      this.houseOrShopNo = this.department2Data.houseOrShopNo || "-";
      this.buildingOrColonyName = this.department2Data.buildingOrColonyName || "-";
      this.streetName = this.department2Data.streetName || "-";
      this.localityOrMohalla = this.department2Data.localityOrMohalla || "-";
      this.pincode = this.department2Data.pincode || "-";
      this.propertyId = this.department2Data.propertyId || "-";
      this.surveyId = this.department2Data.surveyId || "-";
      this.yearOfCreationOfProperty = this.department2Data.yearOfCreationOfProperty || "-";
      this.type = this.department2Data.type || "-";
      this.propertyType = this.department2Data.propertyType || "-";
      this.vasikaNo = this.department2Data.vasikaNo || "-";
      this.vasikaDate = this.department2Data.vasikaDate || "-";
      this.allotmentNo = this.department2Data.allotmentNo || "-";
      this.allotmentDate = this.department2Data.allotmentDate || "-";
      this.businessName = this.department2Data.businessName || "-";
      this.remark = this.department2Data.remark || "-";
      this.inflammableMaterialStoredInYourProperty = this.department2Data.inflammableMaterialStoredInYourProperty || "-";
      this.propertyMoreThan36FT = this.department2Data.propertyMoreThan36FT || "-";
      this.yards = this.department2Data.yards || "-";
      this.ownerShip = this.department2Data.ownerShip || "-";
      this.nameOfOwner = this.department2Data.nameOfOwner || "-";
      this.gender = this.department2Data.gender || "-";
      this.mobileNo = this.department2Data.mobileNo || "-";
      this.guardianName = this.department2Data.guardianName || "-";
      this.relationship = this.department2Data.relationship || "-";
      this.specialCategory = this.department2Data.specialCategory || "-";
      this.emailId = this.department2Data.emailId || "-";
      this.ownershipPercentage = this.department2Data.ownershipPercentage || "-";
      this.address = this.department2Data.address || "-";
      this.addressProof = this.department2Data.addressProof || "-";
      this.aadhaarNo = this.department2Data.aadhaarNo || "-";
      this.registeredWill = this.department2Data.registeredWill || "-";
      this.usageProof = this.department2Data.usageProof || "-";
      this.birthCertificateRequestStatus = this.department2Data.birthCertificateRequestStatus
      this.mnregaRequestStatus = this.department2Data.mnregaRequestStatus
      this.specialCategoryRequestStatus = this.department2Data.specialCategoryRequestStatus
      this.bankRequestStatus = this.department2Data.bankRequestStatus
      this.addressRequestStatus = this.department2Data.addressRequestStatus
      
      this.spinner.hide();
    }, error => {
      this.spinner.hide();
      this.toastr.error(error.error.message, `Error`);
    });
  }

  getBirthDataFromDepartmen2(): void {
  
    let body = {
      aadhaarNo: this.department2Data.aadhaarNo,
      requestFrom: this.requestFrom,
      documentType:this.birthData
    };
    this.departmentService.department1Getdata(body).subscribe((data: any) => {
      this.birthCertificateRequestStatus = data.data.status;
    });
  }

  getManregraDataFromDepartmen2(): void {
  
    let body = {
      aadhaarNo: this.department2Data.aadhaarNo,
      requestFrom: this.requestFrom,
      documentType:this.mnregaData
    };
    console.log("hdsh",body)
    this.departmentService.department1Getdata(body).subscribe((data: any) => {
      this.mnregaRequestStatus = data.data.status;
    });
  }

  getSpecialCategoryDataFromDepartmen2(): void {
  
    let body = {
      aadhaarNo: this.department2Data.aadhaarNo,
      requestFrom: this.requestFrom,
      documentType:this.specialCategoryData
    };
    this.departmentService.department1Getdata(body).subscribe((data: any) => {
      this.specialCategoryRequestStatus = data.data.status;
    });
  }

  getAddressDataFromDepartmen2(): void {
  
    let body = {
      aadhaarNo: this.department2Data.aadhaarNo,
      requestFrom: this.requestFrom,
      documentType:this.addressData
    };
    this.departmentService.department1Getdata(body).subscribe((data: any) => {
      this.addressRequestStatus = data.data.status;
    });
  }

  getBankDataFromDepartmen2(): void {
  
    let body = {
      aadhaarNo: this.department2Data.aadhaarNo,
      requestFrom: this.requestFrom,
      documentType:this.bankData
    };
    this.departmentService.department1Getdata(body).subscribe((data: any) => {
      this.bankRequestStatus = data.data.status;
    });
  }

  downloadDocument(filename: string): void {   
    this.spinner.show();
    this.departmentService.downloadCertificate(filename).subscribe(
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
