import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder} from "@angular/forms";
import {ActivatedRoute,Router} from '@angular/router'
import { NgxSpinnerService } from "ngx-spinner";
import {UnifiedService } from '../../pages/service/unified_registry/unified.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-data-inference',
  templateUrl: './data-inference.component.html',
  styleUrls: ['./data-inference.component.scss']
})
export class DataInferenceComponent implements OnInit {
  inference: any;
  sortBy ={
    sort:"none"
  }
 
  constructor(private unifiedService:UnifiedService,private route: ActivatedRoute,
    private router: Router,private spinner: NgxSpinnerService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.inferenceData()
  }

  redSort(){
    this.sortBy.sort = "RED"
    this.inferenceData();
  }
  inferenceData(){
    this.spinner.show();
    this.unifiedService.getDataInference(this.sortBy.sort).subscribe((data: any) => {
      this.inference = data.data
      console.log(this.inference)

      this.spinner.hide();
    },error =>{
      this.toastr.error(error.error.message,`Error`)
     })
  }

}
