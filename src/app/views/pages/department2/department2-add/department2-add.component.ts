import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department2Service } from 'src/app/views/services/department2/department2.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-department2-add',
  templateUrl: './department2-add.component.html',
  styleUrls: ['./department2-add.component.scss']
})
export class Department2AddComponent implements OnInit {
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
  lpgConnection: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departmentService: Department2Service,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private datePipe: DatePipe,
  ) {}

  ngOnInit(): void {}

  cancel() {
    this.router.navigate(['/department2/list']);
  }

  department2AddForm() {
    this.spinner.show();
    const formData = new FormData();
    for (const key of Object.keys(this.filter)) {
      const value = this.filter[key];
      if (value !== '' && value !== null && value !== undefined) {
        if (typeof value === 'string') {
          if (['yearOfCreationOfProperty', 'allotmentDate', 'vasikaDate'].includes(key)) {
            // Format date if it matches the specified keys
            const formattedDate = this.datePipe.transform(value, 'yyyy/MM/dd') || '';
            formData.append(key, formattedDate.toString());
          } else {
            formData.append(key, value);
          }
        } else if (value instanceof File) {
          formData.append(key, value);
        } else {
          // This branch should never execute, but TypeScript still complains
          // We'll use type assertion here to tell TypeScript that value is either a string or a File
          formData.append(key, value as string); // Here, we assert that value is a string
        }
      }
    }
    
    this.departmentService.department_2Add(formData).subscribe(
      (data: any) => {
        console.log(data);
        this.toastr.success('Department 2 Data Added Successfully', 'Success');
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

  
  
  

  onFileSelected(event: any, field: string) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.filter[field] = file;
    }
  }

  lpgConnectionCheck(event: any) {
    this.lpgConnection = event.target.value;
    console.log(this.lpgConnection);
  }
}
