import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { AuthManagementService } from 'src/app/views/services/auth/auth-management.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    email: "",
    password: "",
  };
  returnUrl: any;
  constructor(private router: Router, private route: ActivatedRoute, private authService:AuthManagementService,private toastr: ToastrService) { }
  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onLoggedin(myform:any) {
    let body = {
      email: this.user.email,
      password: this.user.password,
    };
    this.authService.adminLogin(body).subscribe((data: any) => {
      console.log(data.data.token);
      // localStorage.setItem('Token', data.data.Token);
      localStorage.setItem('token',data.data.token);
            this.router.navigate(["department2/list"]);
    },error =>{
      this.toastr.error("login id and password is incorrect",`Error`)
      });
    }
  }