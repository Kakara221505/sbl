import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { id } from '@swimlane/ngx-datatable';
import { title } from 'process';
@Injectable({
  providedIn: 'root'
})
export class DepartmentServicesService {
  token: any;
  httpOptions: any;
  httpOptionsPost: any;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token')
  }
  department() {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlAdmin + 'department1/get/all/data',
      httpOptionsPost
    );
  }
  department_1Add(departmentAdd: any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.post(
      environment.apiUrlAdmin + 'department1/save/data',
      departmentAdd,
      httpOptionsPost
    );
  }
  departmentgetId(id: any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlAdmin +`department1/get/data/byAadhaar?id=${id}`,
      httpOptionsPost
    );
  }

  deparmentEdit(departmentEdit: any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.put(
      environment.apiUrlAdmin + 'department1/update/data/byAadhaar',
      departmentEdit,
      httpOptionsPost
    );
  }
  departmentViewId(id: any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlAdmin +`department1/get/data/byAadhaar?id=${id}`,
      httpOptionsPost
    );
  }

  departmentInitialMigration(){
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.post(
      environment.apiUrlAdmin + 'department1/initial/migrate',null,
      httpOptionsPost
    );
  }
  departmentMigrate(){
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.post(
      environment.apiUrlAdmin + 'department1/migrate',null,
      httpOptionsPost
    );
  }
  departmentInitialStatus() {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlAdmin +'department1/get/data/migration/status',
      httpOptionsPost
    );
  }
  deparment1Delete(id: any,body:any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.put(
      environment.apiUrlAdmin + `department1/delete/data/byAadhaar?id=${id}` ,
      body,
      httpOptionsPost
    );
  } 
  
  department2Getdata(departmentdata:any){
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

}

