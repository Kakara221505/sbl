import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../../src/environments/environment';
import { id } from '@swimlane/ngx-datatable';
import { title } from 'process';
@Injectable({
  providedIn: 'root'
})
export class UnifiedService {
  token: any;
  httpOptions: any;
  httpOptionsPost: any;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token')
  }

  getPiiData(aadhaarNo:any){
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `admin/sbl/get/piiData/list?aadhaarNo=${aadhaarNo}`,
      httpOptionsPost
    );
  }
  
  getPiiDataByAadhar(aadhaarNo:any){
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `user/get/piiData/byAadhaar?aadhaarNo=${aadhaarNo}`,
      httpOptionsPost
    );
  }
  getNonPiiData1(){
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `admin/sbl/get/nonPiiData/list?nonPiiType=nonPii1`,
      httpOptionsPost
    );
  }

  getNonSearchPiiData1(uuid:any){
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `admin/sbl/get/nonPiiData/list?uuid=${uuid}&nonPiiType=nonPii1`,
      httpOptionsPost
    );
  }
  
  getNonPiiData2(uuid:any){
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `admin/sbl/get/nonPiiData/list?uuid=${uuid}&nonPiiType=nonPii2`,
      httpOptionsPost
    );
  }
  getNonPiiData1Search(uuid:any){
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `user/get/nonPiiData/byUuid?uuid=${uuid}&nonPiiType=nonPii1`,
      httpOptionsPost
    );
  }
  getNonPiiData2Search(uuid:any){
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `user/get/nonPiiData/byUuid?uuid=${uuid}&nonPiiType=nonPii2`,
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
  getAllDataByAadhar(aadhaarNo:any){
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `admin/sbl/get/allData/byAadhaar?aadhaarNo=${aadhaarNo}`,
      httpOptionsPost
    );
  }
  blockChain(){
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `admin/sbl/read/data/from/blockChain`,
      httpOptionsPost
    );
  }

  getAllBlockChainDataByAadhar(aadhaarNo:any){
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `admin/sbl/get/allData/from/blockChain?aadhaarNo=${aadhaarNo}`,
      httpOptionsPost
    );
  }

  paymentList( pageNo: any, pageSize: any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `user/get/reward/list?pageNo=${pageNo}&pageSize=${pageSize}&type=all`,
      httpOptionsPost
    );
  }
  paymentListBy( pageNo: any, pageSize: any, type:any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `user/get/reward/list?pageNo=${pageNo}&pageSize=${pageSize}&type=${type}`,
      httpOptionsPost
     
    );
  }

  tokenValueChange(value: any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.post(
      environment.apiUrlUnified+ `user/set/custom/value/ofToken?value=${value}`,null,
      httpOptionsPost
    );
  }

  dataExchange( pageNo: any, pageSize: any, aadhaarNo:any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `data/exchange/list/forAdmin?pageNo=${pageNo}&pageSize=${pageSize}&aadhaarNo=${aadhaarNo}`,
      httpOptionsPost
    );
  }
  totalNoUSer( from: any, to: any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `get/user/stats?from=${from}&to=${to}`,
      httpOptionsPost
     
    );
  }
  totalNoExchange( from: any, to: any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `get/data/exchange/stats?from=${from}&to=${to}`,
      httpOptionsPost
     
    );
  }
  totalIncomeAvailing( from: any, to: any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `get/user/availingScheme/stats?from=${from}&to=${to}`,
      httpOptionsPost
     
    );
  }
  totalReward( from: any, to: any) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `get/reward/stats?from=${from}&to=${to}`,
      httpOptionsPost
    );
  }
  totalRectification() {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `get/rectification/stats`,
      httpOptionsPost
    );
  }
  
  totalRaised( ) {
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `get/rectification/raised/stats`,
      httpOptionsPost
    );
  }
  getExchangeByAadhar(aadhaarNo:any){
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `data/by/aadhaarNo?aadhaarNo=${aadhaarNo}`,
      httpOptionsPost
    );
  }
  getDataInference(sort:any){
    const httpOptionsPost = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-custom-token': this.token,
      }),
    };
    return this.http.get(
      environment.apiUrlUnified + `get/data/inference?sort=${sort}`,
      httpOptionsPost
    );
  }
}
