import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../../src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: any;
  httpOptions: any;
  httpOptionsPost: any;
  constructor(private http:HttpClient){}

  unifiedLogin(loginDetails: any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post(
      environment.apiUrlAdmin+ 'admin/sbl/unifiedRegistryLogin',
      loginDetails,
      httpOptionsPost
    );
  }
}
