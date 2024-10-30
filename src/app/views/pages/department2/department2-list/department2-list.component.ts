import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'; 
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Department2Service } from 'src/app/views/services/department2/department2.service';
@Component({
  selector: 'app-department2-list',
  templateUrl: './department2-list.component.html',
  styleUrls: ['./department2-list.component.scss']
})
export class Department2ListComponent implements OnInit {
  
  modalReference: NgbModalRef;
  departmentList: any;
  initialStatus = false
  aadharNo = ""
  aadharrNumber: any;
  aadhaarNo: string | null;
  aadharrNumber1: any;
  aadharNumber1: any;
  body: any;
  basicModalCloseResult: string ;
  file: any;
  constructor(private route: ActivatedRoute,
    private router: Router, private departmentService:Department2Service,private toastr: ToastrService,
    private spinner: NgxSpinnerService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.aadhaarNo = this.route.snapshot.paramMap.get('aadhaarNo');
    this.department2_list()
    this.departmentIntialStatus2()
  }
  add(){
    this.router.navigate(['department2/add'])  
  }
  initialMigrate(){
    this.departmentService.department2InitialMigration().subscribe((data: any) => {
      console.log(data);
      this.toastr.success('Department 2 Data Initial Migrate Successfully', 'Success');
      this.departmentIntialStatus2()
    },error =>{
      this.toastr.error(error.error.message,`Error`,{
        timeOut:3000
      })
      })
  }
  migrate(){
    this.departmentService.department2Migrate().subscribe((data: any) => {
      console.log(data);
      this.toastr.success('Department 2 Data Migrate Successfully', 'Success');
    },error =>{
      this.toastr.error(error.error.message,`Error`,{
        timeOut:3000
      })
      })
  }
  
  department2_list(){
    this.departmentService.department2().subscribe((data:any)=>{
      this.departmentList=data.data.localGovernmentList
      console.log(this.departmentList)
    },error =>{
      this.toastr.error(error.error.message,`Error`)
      })
    }
    departmentIntialStatus2(){
      this.departmentService.department2InitialStatus().subscribe((data:any)=>{
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
    department2deleteFile(id:any){
      this.spinner.show;  
   
     this.departmentService.deparment2Delete(id,this.body).subscribe((data:any)=>{
      this.aadharrNumber=data
      this.toastr.success('Department 2 Data delete Successfull',`Success`)
      this.modalReference.close(); 
      this.department2_list()
      this.spinner.hide();
  },error =>{
    this.toastr.error(error.error.message,`Error`,{
      timeOut:3000
    })
  })
    }

    openBasicModal2(content:any) {
      this.spinner.show()
      this.modalReference = this.modalService.open(content, {})
      this.modalReference.result.then((result) => {
        this.basicModalCloseResult = "Modal closed" + result
      }).catch((res) => {});
      this.spinner.hide()
    }
    clearFileInput() {
      this.file = null; // Clear the selected file
    }
    uploadFile(event: any) {
      const fileInput = event.target;

    if (fileInput.files.length > 0) {
      this.file = fileInput.files[0];
    }
    }
    
  
    
    uploadExcel(){
      this.spinner.show()
    const formData = new FormData();
    formData.append('excelFile',this.file);
    this.departmentService.department2ExcelUpload(formData).subscribe((data: any) => {
      console.log(data);
      this.toastr.success('File Upload Successfully !', 'Success');
      this.modalReference.close(); 
      this.department2_list()
      this.spinner.hide()
  },error =>{
    this.toastr.error(error.error.message,`Error`)
    this.spinner.hide()
  })
  }

    piiDataList(){   
      this.spinner.show()
      this.departmentService.getDataByAadhaar(this.aadhaarNo).subscribe((data:any)=>{
        this.spinner.hide() 
        this.department2_list()
      },error =>{
         this.toastr.error(error.error.message,`Error`)
        })
        this.spinner.hide() 
        this.spinner.hide() 
      }
      
}
