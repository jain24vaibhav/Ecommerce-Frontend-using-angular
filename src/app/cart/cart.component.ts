import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _user:UserService) { }

  cartItems : any = [] 
  deliveryCharges : number = 0
  totalPrice : number = 0 
  finalCost : number
  
  ngOnInit() {
    this.getCartItems()
  }


  getCartItems(){
    this._user.getCartItemsOfUser()
    .subscribe(
      res=>{
        console.log(res)
        this.cartItems = res
        if(this.cartItems.length > 0)
        {
            for(var i=0;i<this.cartItems.length;i++)
            {
                this.totalPrice += this.cartItems[i].productPrice
            }
            if(this.totalPrice<500)
              this.deliveryCharges = 200

            this.finalCost = this.deliveryCharges + this.totalPrice
            console.log(this.totalPrice)
            console.log(this.deliveryCharges)
        }
      },
      err=>{
        console.log(err)
      }
    )
  }

  removeFromCart(id, i){
    var obj = {
      "userId" : localStorage.getItem('userId'),
      "productId" : id
    }
    this._user.removeFromCart(obj)
      .subscribe(
        res=>{
          console.log(res)
          this.deliveryCharges =0 
          this.finalCost = 0
           this.totalPrice = 0
          this.getCartItems()
        },
        err=>{
          console.log(err)
        }
      )
  }

}
