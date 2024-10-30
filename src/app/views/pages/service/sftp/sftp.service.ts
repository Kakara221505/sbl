import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../../src/environments/environment';
import { id } from '@swimlane/ngx-datatable';
import { title } from 'process';
@Injectable({
  providedIn: 'root'
})
export class SftpService {

  token: any;
  httpOptions: any;
  httpOptionsPost: any;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token')
  }
  department1SftpJson() {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `admin/sbl/getLocalGovernmentJsonList?path=/home/sbl_registry_backend/pub-department-1/`,
      httpOptionsPost
    );
  }
  department2SftpJson() {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `admin/sbl/getLocalGovernmentJsonList?path=/home/sbl_registry_backend/pub-department-2/`,
      httpOptionsPost
    );
  }
  department1Download(filename:any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlAdmin + '/admin/sbl/downloadFoodSuppliesJsonFile?fileName='+ filename,
      httpOptionsPost
    );
  }
  department2Download(filenames:any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlAdmin + 'admin/sbl/downloadLocalGovernmentJsonFile?fileName='+ filenames,
      httpOptionsPost
    );
  }

}
