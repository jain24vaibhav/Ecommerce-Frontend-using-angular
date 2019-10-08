import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

 

  private token = ''

  baseUrl="https://localhost:44318/api/"
  public _base_uploadPath:String = 'http://192.168.0.11:3000/uploads/';
  
  constructor(private http:HttpClient) {
    
   }

  post(url, payload) {
    if(localStorage.getItem('token')!='undefined' && localStorage.getItem('token')!='' && localStorage.getItem('token')!=null)
    this.token = localStorage.getItem('token');
    const headers = {
      headers : new HttpHeaders().set('Authorization',  "Bearer "+this.token)
    };
    return this.http.post(url, payload, headers);
  }

 get(url, queryParams = {}) {
  if(localStorage.getItem('token')!='undefined' && localStorage.getItem('token')!='' && localStorage.getItem('token')!=null)
  this.token = localStorage.getItem('token');
    const headers = {
      headers : new HttpHeaders().set('Authorization',  "Bearer "+this.token)
    };
    return this.http.get(url, {headers : headers.headers, params : queryParams});
  }

 put(url, payload) {
  if(localStorage.getItem('token')!='undefined' && localStorage.getItem('token')!='' && localStorage.getItem('token')!=null)
    this.token = localStorage.getItem('token');
    const headers = {
      headers : new HttpHeaders().set('Authorization',  this.token)
    };
    return this.http.put(url, payload, headers);
  }
 
  delete(url) {
    if(localStorage.getItem('token')!='undefined' && localStorage.getItem('token')!='' && localStorage.getItem('token')!=null)
    this.token = localStorage.getItem('token');
    const headers = {
      headers : new HttpHeaders().set('Authorization',  this.token)
    };
    return this.http.delete(url, headers);
  }
}
