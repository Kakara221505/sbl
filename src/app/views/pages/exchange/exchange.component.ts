import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder} from "@angular/forms";
import {ActivatedRoute,Router} from '@angular/router'
import {ToastrService} from 'ngx-toastr'
import {UnifiedService } from '../service/unified_registry/unified.service'
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  p:number = 1;
  page: number = 10;
  tableSizes: any = [10, 50, 100];
  count!: number;
  totalElement: any;
  dataExchange: any;
 aadhaarNo = "";

  constructor(private unifiedService:UnifiedService,private route: ActivatedRoute,
    private router: Router,private toastr: ToastrService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.exchangeData();
  }

 exchangeDataList(){   
    this.p = 1
    this.exchangeData()
    }
  exchangeData() {
    this.spinner.show();
    this.unifiedService.dataExchange(this.p-1,this.page,this.aadhaarNo).subscribe((data: any) => {
    this.totalElement = data.data.noOfRequestData
    this.dataExchange=data.data.dataExchangeList
      this.spinner.hide();
    },error =>{
      this.toastr.error(error.error.message,`Error`)
     })
    }
}
