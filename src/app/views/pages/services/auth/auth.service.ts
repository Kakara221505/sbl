import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: any;
  httpOptions: any;
  httpOptionsPost: any;
  constructor(private http:HttpClient){
    this.token = localStorage.getItem('token')
    console.log(this.token)
  }

  userLogin(loginDetails: any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        
      }),
    };
    return this.http.post(
      environment.apiUrlAdmin+ 'user/login',
      loginDetails,
      httpOptionsPost
    );
  }
  userSignup(loginDetails: any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(
      environment.apiUrlAdmin+ 'user/signup',
      loginDetails,
      httpOptionsPost
    );
  }

  getAllInformation() {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlAdmin + 'user/get/piiData',
      httpOptionsPost
    );
  }
  getPiiData() {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlAdmin + 'user/get/all/information',
      httpOptionsPost
    );
  }
  getUserData() {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlAdmin + 'user/get/all/information',
      httpOptionsPost
    );
  }

  getSearchSchemeCard(cardNo:any,cardType:any){
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlAdmin + `user/get/dataBy/ration/orSchemeCardNo?cardNo=${cardNo}&cardType=${cardType}`,
      httpOptionsPost
    );
  }

  downloadCertificate(filePath: string){
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
      responseType: 'blob' as 'json' // Specify the response type as Blob
    };
    const payload = { filePath: filePath };
    return this.http.post<Blob>( // Specify the return type as Blob
      environment.apiUrlAdmin + `foodSupplies/readFileFromServer`,
      payload,
      httpOptionsPost
    );
  }
  userPayment(amount:any ) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token':this.token,
        
      }),
    };
    return this.http.post(
      environment.apiUrlAdmin+ `user/payment?amount=${amount}&billType=electricity`,null,
      httpOptionsPost
    );
  }
  userPaymentWater(amount:any ) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token':this.token,
        
      }),
    };
    return this.http.post(
      environment.apiUrlAdmin+ `user/payment?amount=${amount}&billType=water`,null,
      httpOptionsPost
    );
  }

  getUserToken() {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlAdmin + 'user/get/token',
      httpOptionsPost
    );
  }


  getDataExchange() {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlAdmin + 'data/exchange/list/forUser',
      httpOptionsPost
    );
  }


  
  getBill() {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlAdmin + 'user/get/bill/details',
      httpOptionsPost
    );
  }

  userStatus(request:any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token':this.token,
      }),
    };
    return this.http.post(
      environment.apiUrlAdmin+ 'data/request/approve/decline',
      request,
      httpOptionsPost
    );
  }
  userStatusDecline(request:any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token':this.token,
      }),
    };
    return this.http.post(
      environment.apiUrlAdmin+ `data/request/approve/decline`,
      request,
      httpOptionsPost
    );
  }
}
