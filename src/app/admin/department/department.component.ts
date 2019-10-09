import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/Services/department.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private _dep:DepartmentService, private fb:FormBuilder) { }

  ngOnInit() {
    this.getDepartments();
  }

  departmentForm = this.fb.group({
    departmentName : ['',Validators.required]
  })

  updateDepartmentForm = this.fb.group({
    departmentName : ['',Validators.required],
    departmentId : ['',Validators.required]
  })

  departmentList : any
  showAddDepartment = false
  showUpadateDepartment = false
  CRUDresponse : any

  getDepartments(){
    this._dep.getDepartmentList()
      .subscribe(
        res=>{
          console.log(res)
          this.departmentList = res
        },
        err=>{
          console.log(err)
        }
      )
  }

  addDepartment(){
    console.log(this.departmentForm.value)
    this._dep.addDepartment(this.departmentForm.value)
      .subscribe(
        res=>{
          console.log(res)
          this.CRUDresponse = res.message
          this.getDepartments();
          this.showAddDepartment = false;
          this.departmentForm.reset();
        },
        err=>{
          console.log(err)
          this.CRUDresponse = err.message
        }
      )
  }

  delete(id,i){
    console.log(i)
    this._dep.deleteDepartment(id)
      .subscribe(
        res=>{
          console.log(res)
          this.CRUDresponse = res.message
          this.departmentList.splice(i,1)
        },
        err=>{
          console.log(err)
          this.CRUDresponse = err.message
        }
      )
  }

  updateDepartment(){
    console.log(this.updateDepartmentForm.value)
    this._dep.updateDepartment(this.updateDepartmentForm.value)
      .subscribe(
        res=>{
            console.log(res)
            this.CRUDresponse = res.message
            this.showUpadateDepartment = false
            this.updateDepartmentForm.reset();
            this.getDepartments();
        },
        err=>{
          console.log(err)
          this.CRUDresponse = err.message
        }
      )
  }

  updateShow(dep){
    console.log(dep)
    this.updateDepartmentForm.patchValue(dep)
  }
}
