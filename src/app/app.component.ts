import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './Services/department.service';
import { ProductService } from './Services/product.service';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ecommerce';
  departmentName : any
  searchString : string
  searchProduct : any

  constructor(private _dep : DepartmentService, private _prod:ProductService, private _auth:AuthService){}

  ngOnInit(){
      this._dep.getDepartmentList()
        .subscribe(
          res=>{
            console.log(res)
            this.departmentName = res
          },
          err=>{
            console.log(err)
          }
        )
  }

  logout(){
    localStorage.clear()
  }

  search(){
    console.log(this.searchString)
    if(this.searchString.length>0)
    {
      this._prod.getProducts(this.searchString)
      .subscribe(
        res=>{
          console.log(res)
          this.searchProduct = res
        },
        err=>{
          console.log(err)
        }
      )
    }
    else{
      this.searchProduct = null
    }
   
  }
}
