import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _base : BaseService) { }

  getProducts(query){
    return this._base.get(this._base.baseUrl + "products/search/" + query)
  }

  getAllProducts(){
    return this._base.get(this._base.baseUrl + "products")
  }

  addProduct(product):Observable<any>{
    return this._base.post(this._base.baseUrl+ "products", product)
  }

  deleteProduct(id):Observable<any>{
    return this._base.delete(this._base.baseUrl+ "products/"+id)
  }

  updateProduct(product):Observable<any>{
    return this._base.put(this._base.baseUrl + "products", product)
  }

}
