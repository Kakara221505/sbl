import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'; 
import { DepartmentServicesService } from 'src/app/views/services/department/department-services.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  modalReference: NgbModalRef;
  departmentList: any;
  initialStatus =  false;
  aadharNumber1: any;
  body: any;
  aadharrNumber: any;
  id:any;
  basicModalCloseResult: string ;
  file: File;
  aadhaarNo:any
  constructor(private route: ActivatedRoute,
    private router: Router, private departmentService:DepartmentServicesService,
    private spinner: NgxSpinnerService,private toastr: ToastrService,private modalService: NgbModal){ }

  ngOnInit(): void {
    this.department_list()
    this.departmentIntialStatus1()
  }

  add(){
    this.spinner.show();
    this.router.navigate(['department1/add'])
    this.spinner.hide();
  
  }
  initialMigrate(){
    this.departmentService.departmentInitialMigration().subscribe((data: any) => {
      console.log(data);  
      this.toastr.success('Department 1 Data Initial Migrate Successfully', 'Success');
      this.departmentIntialStatus1();
    },error =>{
      this.toastr.error(error.error.message,`Error`)
      })
  }
  migrate(){
    this.departmentService.departmentMigrate().subscribe((data: any) => {
      console.log(data);
      this.toastr.success('Department 1 Data Migrate Successfully', 'Success');
    },error =>{
      this.toastr.error(error.error.message,`Error`)
      })
  }

  department_list(){
    this.spinner.show();
    this.departmentService.department().subscribe((data:any)=>{
      this.departmentList=data.data.department1Data
      console.log(this.departmentList)
      this.spinner.hide();
    },error =>{
      this.toastr.error(error.error.message,`Error`)
      })
    }  

    departmentIntialStatus1(){
      this.departmentService.departmentInitialStatus().subscribe((data:any)=>{
        this.initialStatus = data.data.status
      })
    }

    openBasicModal(content: any) {
      this.spinner.show()
      this.modalReference = this.modalService.open(content, {})
      this.modalReference.result.then((result) => {
        this.basicModalCloseResult = "Modal closed" + result
      }).catch((res) => {});
      this.spinner.hide()
    }

    
    deleteFile(id:any){
      this.spinner.show;  
      this.aadharNumber1 = id
     this.departmentService.deparment1Delete(this.aadharNumber1,this.body).subscribe((data:any)=>{
      this.aadharrNumber=data
      this.toastr.success('Department 1 Data delete Successfull',`Success`)
      this.modalReference.close(); 
      this.department_list()
      this.spinner.hide();
  },error =>{
    this.toastr.error(error.error.message,`Error`,{
      timeOut:3000
    })
  }) 
    }

    piiDataList(){   
      this.spinner.show()
      
        this.spinner.hide() 
      }
  
  }

