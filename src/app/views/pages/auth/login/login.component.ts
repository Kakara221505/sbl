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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    aadhaarNo: "",
    otp: "",
  };
  returnUrl: any;

  constructor(private router: Router, private route: ActivatedRoute, private authService:AuthService,private toastr: ToastrService) { }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  onLoggedin(myform:any) {
    let body = {
      aadhaarNo: this.user.aadhaarNo,
      otp: this.user.otp,
    };
    this.authService.userLogin(body).subscribe((data: any) => {
      localStorage.setItem('token',data.data.token);
      // this.router.navigateByUrl("/dashboard");
      window.location.href = "/dashboard"
    },error =>{
      this.toastr.error(error.error.message,`Error`)
      console.log(error)
      });
}

}
