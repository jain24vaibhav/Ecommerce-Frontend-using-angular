import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private _base:BaseService) { }

  getDepartmentList(){
    return this._base.get(this._base.baseUrl+"department");
  }

  addDepartment(department): Observable<any>{
    return this._base.post(this._base.baseUrl + "department", department)
  }

  updateDepartment(department):Observable<any>{
    return this._base.put(this._base.baseUrl + "department", department)
  }

  deleteDepartment(id):Observable<any>{
    return this._base.delete(this._base.baseUrl + "department/"+id)
  }
}
