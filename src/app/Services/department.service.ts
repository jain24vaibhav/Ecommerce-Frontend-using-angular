import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private _base:BaseService) { }

  getDepartmentList(){
    return this._base.get(this._base.baseUrl+"department");
  }
}
