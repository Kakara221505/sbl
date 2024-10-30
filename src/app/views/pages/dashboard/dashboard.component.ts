import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { AuthService } from 'src/app/views/pages/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { error } from 'console';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  preserveWhitespaces: true
})
export class DashboardComponent implements OnInit {
  basicModalCloseResult:any;
  modalReference: NgbModalRef;
  allData: any;
  aadharNo: any;
  userToken: any;
  dataExchangeRequestList: any;
  totalPages: any;
  totalElement: any;
  request :string = "Approved"
  requestDeclined:string = "Rejected"
  id: any;
  dataId: any;
  statusFor: any;
  comment: any;
  approveComment :null

  departmentNamesMap: any = {
    Department1: 'Food And Supplies Department',
    Department2: 'Local Government Department'
  };


  constructor(private router: Router, private route: ActivatedRoute, private authService:AuthService,private toastr: ToastrService,private spinner: NgxSpinnerService,private modalService: NgbModal) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('dataId');
    this. allData_list()
    this.allToken_list()
    this. dataExchangeRequest()
  }
  mapDepartmentName(departmentName: string): string {
    return this.departmentNamesMap[departmentName] || departmentName;
  }
  openBasicModal(content: any) {
    this.spinner.show();
    this.modalReference = this.modalService.open(content, {})
    this.modalReference.result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {});
    this.spinner.hide();
  }

  allData_list(){
    this.spinner.show();
    this.authService.getAllInformation().subscribe((data:any)=>{
      this.allData=data.data
    
      console.log(this.allData)
    },error =>{
      this.toastr.error(error.error.message,`Error`)
      })
      this.spinner.hide();
    }  
  allToken_list(){
    this.spinner.show();
    this.authService.getUserToken().subscribe((data:any)=>{
      this.userToken=data.data.token
      console.log(this.userToken)
    },error =>{
      this.toastr.error(error.error.message,`Error`)
      })
      this.spinner.hide();
    }  
   
  dataExchangeRequest(){
    this.spinner.show();
    this.authService.getDataExchange().subscribe((data:any)=>{
     this.dataExchangeRequestList = data.data.dataExchangeList 
     this.totalPages = data.data.totalPages
     this.totalElement = data.data.noOfRequestData
    this.id =  data.data.dataExchangeList[0]
   this.spinner.hide();
    },error =>{
      this.toastr.error(error.error.message,`Error`)
      })
      this.spinner.hide();
    }  

    statusForUser(dataId:any){
      this.spinner.show()
      let body ={
        status : this.request,
        dataId : dataId,
        comment : this.approveComment
      }
      this.authService.userStatus(body).subscribe((data:any)=>{
        this.statusFor = data.data.status
        console.log(this.statusFor)
        this.dataExchangeRequest()
        this.toastr.success(`Request Approved Successfully`,`Success`)
        this.spinner.hide();
      },error=>{
        this.toastr.error(error.error.message,`Error`)
      })
      this.spinner.hide()
    }
    statusForUserDecline(dataId:any){
      this.spinner.show()
      let body ={
        status : this.requestDeclined,
        dataId : dataId,
        comment :this.comment
      }
      this.authService.userStatusDecline(body).subscribe((data:any)=>{
        this.statusFor = data.data.status
        this.modalReference.close(); 
        this.toastr.success(`Request Rejected Successfully`,`Success`)
        this.spinner.hide();
        this.dataExchangeRequest();
      },error=>{
        this.toastr.error(error.error.message,`Error`)
      })
    }



}

