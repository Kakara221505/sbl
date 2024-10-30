import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department2Service } from 'src/app/views/services/department2/department2.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-department2-edit',
  templateUrl: './department2-edit.component.html',
  styleUrls: ['./department2-edit.component.scss']
})
export class Department2EditComponent implements OnInit {
  filter: { [key: string]: string | File } = {
    aadhaarNo: "",
    city: "",
    houseOrShopNo: "",
    buildingOrColonyName: "",
    streetName: "",
    localityOrMohalla: "",
    pincode: "",
    propertyId: "",
    surveyId: "",
    yearOfCreationOfProperty: "",
    type: "",
    propertyType: "",
    vasikaNo: "",
    vasikaDate: "",
    allotmentNo: "",
    allotmentDate: "",
    businessName: "",
    remark: "",
    inflammableMaterialStoredInYourProperty: "",
    propertyMoreThan36FT: "",
    yards: "",
    usageProof: "",
    registeredWill: "",
    addressProof: "",
    ownerShip: "",
    nameOfOwner: "",
    gender: "",
    mobileNo: "",
    guardianName: "",
    relationship: "",
    specialCategory: "",
    emailId: "",
    ownershipPercentage: "",
    address: "",
  };
  localgovId: any;
  filters: any;
  enableAddressFormEdit: boolean=false;
  enableUseFormEdit: boolean=false;
  department2Data: any;

  constructor(private route: ActivatedRoute, private router: Router,private datePipe: DatePipe,
              private departmentService: Department2Service, private toastr: ToastrService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.localgovId = this.route.snapshot.paramMap.get('id');
    this.getIdDepartment2();
  }

  cancel() {
    this.router.navigate(['/department2/list'])
  }

  getIdDepartment2() {
    this.spinner.show()
    const id = this.route.snapshot.paramMap.get('id');
    this.departmentService.department2getId(id).subscribe((data: any) => {
      this.department2Data=data.data
      console.log("hii",this.department2Data)
      this.mapData(data.data);
      this.spinner.hide()
    }, error => {
      this.toastr.error(error.error.message, `Error`)
    })
  }

  department2EditForm() {
    this.spinner.show();
    const formData = new FormData();
  
    // Append localgovId to formData
    formData.append('localgovId', this.localgovId);
  
    // Append other form data
    for (const key of Object.keys(this.filter)) {
      const value = this.filter[key];
      if (value !== '' && value !== null && value !== undefined) { // Check if value is not empty
        if (typeof value === 'string') {
          // if (['yearOfCreationOfProperty', 'allotmentDate', 'vasikaDate'].includes(key)) {
          //   const formattedDate 
          //   = this.datePipe.transform(value, 'yyyy/MM/dd') || '';
          //   formData.append(key, value);
          // } else {
            formData.append(key, value);
          // }
        } else if (value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, value as string);
        }
      }
    }
    
    this.departmentService.deparment2Edit(formData).subscribe(
      (data: any) => {
        console.log(data);
        this.toastr.success('Department 2 Data updated Successfully', 'Success');
        this.spinner.hide();
        this.router.navigate(['/department2/list']);
      },
      (error) => {
        this.spinner.hide();
        this.toastr.error(error.error.message, `Error`, {
          timeOut: 3000,
        });
      }
    );
  }

  
  
  


  mapData(data: any) {
    this.filter.aadhaarNo = data.aadhaarNo;
    this.filter.city = data.city;
     this.filter.houseOrShopNo = data.houseOrShopNo;
     this.filter.buildingOrColonyName = data.buildingOrColonyName;
     this.filter.streetName = data.streetName;
     this.filter.localityOrMohalla = data.localityOrMohalla;
     this.filter.pincode = data.pincode;
     this.filter.propertyId = data.propertyId;
     this.filter.surveyId = data.surveyId;
     this.filter.yearOfCreationOfProperty =  data.yearOfCreationOfProperty;
     this.filter.vasikaDate =  data.vasikaDate;
     this.filter.allotmentDate =  data.allotmentDate;
     this.filter.type = data.type;
     this.filter.propertyType = data.propertyType;
     this.filter.vasikaNo = data.vasikaNo;
     this.filter.allotmentNo = data.allotmentNo;
     this.filter.businessName = data.businessName;
     this.filter.remark = data.remark;
     this.filter.inflammableMaterialStoredInYourProperty = data.inflammableMaterialStoredInYourProperty;
     this.filter.propertyMoreThan36FT = data.propertyMoreThan36FT;
     this.filter.yards = data.yards;
    //  this.filter.usageProof = data.usageProof;
     this.filter.registeredWill = data.registeredWill;
    //  this.filter.addressProof = data.addressProof;
     this.filter.ownerShip = data.ownerShip;
     this.filter.nameOfOwner = data.nameOfOwner;
     this.filter.gender = data.gender;
     this.filter.mobileNo = data.mobileNo;
     this.filter.guardianName = data.guardianName;
     this.filter.relationship = data.relationship;
     this.filter.specialCategory = data.specialCategory;
     this.filter.emailId = data.emailId;
     this.filter.ownershipPercentage = data.ownershipPercentage;
     this.filter.address = data.address;
  }



onFileSelected(event: any, field: string) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.filter[field] = file;
  }
}

downloadAddressProof() {

}

enableAddressProofEdit() {
  this.enableAddressFormEdit = true;
}

downloadUseProof() {

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

enableUseProofEdit() {
  this.enableUseFormEdit = true;
}


}
