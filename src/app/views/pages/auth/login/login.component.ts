import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,
  FormControl,
  Validators,
  FormBuilder,} from '@angular/forms'
import{AuthService} from '../../../pages/service/auth/auth.service'
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
  constructor(private router: Router, private route: ActivatedRoute,private authService:AuthService,private toastr: ToastrService) { }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  onLoggedin(myform:any) {
    let body = {
      email: this.user.email,
      password: this.user.password,
    };
    this.authService.unifiedLogin(body).subscribe((data: any) => {
      console.log(data.data.token);
      // localStorage.setItem('Token', data.data.Token);
      localStorage.setItem('token',data.data.token);
      this.router.navigate(["/sftp/list"]);           
    },error =>{
      this.toastr.error("login id and password is incorrect ",`Error`)
     });
    
  }

}
