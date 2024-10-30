import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { id } from '@swimlane/ngx-datatable';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class Department2Service {
  token: any;
  httpOptions: any;
  httpOptionsPost: any;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token')
  }
  department2() {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlAdmin + `localgovernment/dataList`,
      httpOptionsPost
    );
  }

  department_2Add(formData: FormData) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'x-custom-token': this.token,
      }),
    };
    return this.http.post(
      environment.apiUrlAdmin + 'localgovernment/saveData',
      formData,
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

  department2getId(id: any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlAdmin +`localgovernment/getDataById?localgovId=${id}`,
      httpOptionsPost
    );
  }
  deparment2Edit(formData: FormData) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'x-custom-token': this.token,
      }),
    };
    return this.http.post(
      environment.apiUrlAdmin + 'localgovernment/updateData',
      formData,
      httpOptionsPost
    );
  }
  department2ViewId(id: any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlAdmin +`localgovernment/getDataById?localgovId=${id}`,
      httpOptionsPost
    );
  }


  department2InitialMigration(){
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.post(
      environment.apiUrlAdmin + 'localgovernment/initialMigrate',null,
      httpOptionsPost
    );
  }
  department2Migrate(){
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.post(
      environment.apiUrlAdmin + 'localgovernment/migrate',null,
      httpOptionsPost
    );
  }
  department2InitialStatus() {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlAdmin +'localgovernment/checkMigrationStatus',
      httpOptionsPost
    );
  }
  deparment2Delete(id:any,body:any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.post(
      environment.apiUrlAdmin + `localgovernment/deleteData?localgovId=${id}`,
      body,
      httpOptionsPost
    );
  } 

  department1Getdata(departmentdata:any){
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.post(
      environment.apiUrlAdmin + 'data/request',
      departmentdata,
      httpOptionsPost
    );
  }

  department2ExcelUpload(formData: any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'x-custom-token': this.token,
      }),
    };
    return this.http.post(
      environment.apiUrlAdmin +'localgovernment/uploadExcel',
      formData,
      httpOptionsPost
    );
  }  

  getDataByAadhaar(aadhaarNo:any){
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlAdmin + `user/get/piiData/list?aadhaarNo=${aadhaarNo}`,
      httpOptionsPost
    );
  }
  
}
