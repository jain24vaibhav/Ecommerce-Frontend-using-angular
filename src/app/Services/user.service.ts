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

  signup(obj):Observable<any>{
    return this._base.post(this._base.baseUrl + "user/register", obj)
  }

  isItemInCart(obj):Observable<any>{
    return this._base.post(this._base.baseUrl + "user/isincart", obj)
  }

  addToCart(obj){
    return this._base.post(this._base.baseUrl + "user/addtocart", obj)
  }

  removeFromCart(obj){
    return this._base.post(this._base.baseUrl + "user/removefromcart", obj)
  }

  getCartItemsOfUser(){
    var id = localStorage.getItem('userId')
    return this._base.get(this._base.baseUrl + "user/getcartitemsofuser/"+ id)
  }

  placeOrder(obj){
    return this._base.post(this._base.baseUrl + "user/placeorder", obj)
  }

  getOrderHistory(){
    var id = localStorage.getItem('userId')
    return this._base.get(this._base.baseUrl + "user/getorderhistory/"+ id)
  }
}
