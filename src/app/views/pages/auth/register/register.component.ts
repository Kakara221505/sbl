import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { AuthService } from 'src/app/views/pages/services/auth/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    aadhaar:any
    userId: any
    password: any
  returnUrl: any;

  constructor(private router: Router,private route: ActivatedRoute, private authService:AuthService) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onRegister(myform: any) {
    let body = {
      aadhaar:this.aadhaar,
      userId: this.userId,
      password: this.password,
    };
    this.authService.userSignup(body).subscribe((data: any) => {
      this.router.navigate(["/dashboard"]);
});
 }
}
