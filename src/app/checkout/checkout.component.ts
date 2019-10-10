import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private _user:UserService, private fb:FormBuilder, private _route:Router) { }

  ngOnInit() {
  }

  addressForm = this.fb.group({
      name : [''],
      houseno : [''],
      area : [''],
      city : [''],
      state : [''],
      pincode : ['']
  })


  placeOrder(){
    var obj = this.addressForm.value
    obj.userId = localStorage.getItem('userId')
    console.log(obj)
    this._user.placeOrder(obj)
      .subscribe(
        res=>{
          console.log(res)
          this._route.navigate(['/user'])
        },
        err=>{
          console.log(err)
          console.log(err.error.message)
        }
      )
  }

}
