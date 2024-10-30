import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder} from "@angular/forms";
import {ActivatedRoute,Router} from '@angular/router'
import { NgxSpinnerService } from "ngx-spinner";
import {UnifiedService } from '../../pages/service/unified_registry/unified.service'
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.scss']
})
export class BlockchainComponent implements OnInit {
  blockchainList: any;
  aadhaarNumber: any;
  allBlockdataAadhar: any;

  constructor(private unifiedService:UnifiedService,private route: ActivatedRoute,
    private router: Router,private toastr: ToastrService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this. blockchainDataShow();
  }

  blockchainDataShow(){
    this.spinner.show()
    this.unifiedService.blockChain().subscribe((data:any)=>{
      this.blockchainList = data.data
      console.log(this.blockchainList)
      this.spinner.hide() 
    })
      this.spinner.hide() 
  }
}
