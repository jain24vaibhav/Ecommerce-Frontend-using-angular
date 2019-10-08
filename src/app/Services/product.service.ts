import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _base : BaseService) { }

  getProducts(query){
    return this._base.get(this._base.baseUrl + "products/search/" + query)
  }

}
