import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { FormBuilder } from '@angular/forms';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _pro:ProductService, private fb:FormBuilder, private _dep:DepartmentService) { }

  productList : any
  departmentList : any
  CRUDresponse : any

  ngOnInit() {
    this.getProducts()
    this.getDepartments()
  }

  getDepartments(){
    this._dep.getDepartmentList()
      .subscribe(
        res=>{
          this.departmentList = res
          console.log(res)
        },
        err=>{
          console.log(err)
        }
      )
  }

  showAddProduct = false
  showUpadateProduct  = false
  productForm = this.fb.group({
      productName : [''],
      productPrice : [''],
      quantityAvailable : [''],
      productMRP : [''],
      departmentId : [''],
      productImage : [''],
      productDescription : [''],
  })

  updateProductForm = this.fb.group({
    productId : [''],
    productName : [''],
    productPrice : [''],
    quantityAvailable : [''],
    productMRP : [''],
    departmentId : [''],
    productImage : [''],
    productDescription : [''],
})

  getProducts(){
    this._pro.getAllProducts()
      .subscribe(
        res=>{
          console.log(res)
          this.productList = res
        },
        err=>{
          console.log(err)
        }
      )
  }

  addProduct(){
    console.log(this.productForm.value)
    this._pro.addProduct(this.productForm.value)
      .subscribe(
        res=>{
          console.log(res)
          this.CRUDresponse =res.message
          this.getProducts();
          this.showAddProduct = false
          this.productForm.reset()
        },
        err=>{
          console.log(err)
          this.CRUDresponse = err.message
        }
      )
  }

  deleteProduct(id,i)
  {
    console.log(id,i)
    this._pro.deleteProduct(id)
      .subscribe(
        res=>{
          this.CRUDresponse = res.message
          this.productList.splice(i,1)
        },
        err=>{
          this.CRUDresponse = err.message
        }
      )
  }

  updateProduct(){
    console.log(this.updateProductForm.value)
    this._pro.updateProduct(this.updateProductForm.value)
        .subscribe(
          res=>{
            this.CRUDresponse = res.message
            this.getProducts();
            this.showUpadateProduct = false
          },
          err=>{
            this.CRUDresponse = err.message
          }
        )

  }

  updateShow(pro){
      this.updateProductForm.patchValue(pro)
      console.log(this.updateProductForm.value)
      
  }

}
