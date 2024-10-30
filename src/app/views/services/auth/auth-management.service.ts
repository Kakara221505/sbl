import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthManagementService {
  token: any;
  httpOptions: any;
  httpOptionsPost: any;
  constructor(private http:HttpClient){
    this.token = localStorage.getItem('token')
  }

  adminLogin(loginDetails: any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post(
      environment.apiUrlAdmin+ 'user/admin/login',
      loginDetails,
      httpOptionsPost
    );
  }
}

