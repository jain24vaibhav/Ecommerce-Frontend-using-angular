import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _base:BaseService) { }

  login(obj):Observable<any>{
    return this._base.post(this._base.baseUrl + "user/login", obj)
  }
}
