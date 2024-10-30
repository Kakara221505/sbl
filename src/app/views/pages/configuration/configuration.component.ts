import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  foodSupplyOption1: string = ''; // Property to store selected value of first Food Supply select box
  foodSupplyOption2: string = ''; // Property to store selected value of second Food Supply select box
  labourDeptOption1: string = ''; // Property to store selected value of first Labour Department select box
  labourDeptOption2: string = ''; // Property to store selected value of second Labour Department select box
  localGovtOption1: string = ''; // Property to store selected value of first Local Government select box
  localGovtOption2: string = ''; // Property to store selected value of second Local Government select box

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    // Retrieve previously selected values from localStorage, if available
    const storedFoodSupplyOption1 = localStorage.getItem('foodSupplyOption1');
    const storedFoodSupplyOption2 = localStorage.getItem('foodSupplyOption2');
    const storedLabourDeptOption1 = localStorage.getItem('labourDeptOption1');
    const storedLabourDeptOption2 = localStorage.getItem('labourDeptOption2');
    const storedLocalGovtOption1 = localStorage.getItem('localGovtOption1');
    const storedLocalGovtOption2 = localStorage.getItem('localGovtOption2');
    if (storedFoodSupplyOption1) {
      this.foodSupplyOption1 = storedFoodSupplyOption1;
    }
    if (storedFoodSupplyOption2) {
      this.foodSupplyOption2 = storedFoodSupplyOption2;
    }
    if (storedLabourDeptOption1) {
      this.labourDeptOption1 = storedLabourDeptOption1;
    }
    if (storedLabourDeptOption2) {
      this.labourDeptOption2 = storedLabourDeptOption2;
    }
    if (storedLocalGovtOption1) {
      this.localGovtOption1 = storedLocalGovtOption1;
    }
    if (storedLocalGovtOption2) {
      this.localGovtOption2 = storedLocalGovtOption2;
    }
  }

  addNewDept() {
    // Add new department logic
  }

  cancel() {
    // Cancel button logic
  }

  submit() {
    // Store selected values in localStorage
    localStorage.setItem('foodSupplyOption1', this.foodSupplyOption1);
    localStorage.setItem('foodSupplyOption2', this.foodSupplyOption2);
    localStorage.setItem('labourDeptOption1', this.labourDeptOption1);
    localStorage.setItem('labourDeptOption2', this.labourDeptOption2);
    localStorage.setItem('localGovtOption1', this.localGovtOption1);
    localStorage.setItem('localGovtOption2', this.localGovtOption2);
    this.toastr.success('Data saved successfully!', 'Success');
  }
}
