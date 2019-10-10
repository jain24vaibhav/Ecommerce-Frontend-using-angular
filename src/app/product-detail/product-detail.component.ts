import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private aRoute:ActivatedRoute, private _pro:ProductService, private _user:UserService) { }

  ngOnInit() {
    
    this.aRoute.params.subscribe(routeParams => {
      window.scroll({ 
        top: 0, 
        left: 0,   
        behavior: 'smooth' 
      });
      
      this.productId = routeParams.id
      this.getProduct(routeParams.id)
      this.getRelatedProducts(routeParams.id)
      this.isItemInCart()

    });
  }

  productId : number
  cartButtonText = "Add to cart"
  productDetail : any = {}
  relatedProducts : any
  itemInCart = false

  isItemInCart(){
    var obj = {
      userId : localStorage.getItem('userId'),
      productId : this.productId
    }
    this._user.isItemInCart(obj)
      .subscribe(
        res=>{
          console.log(res)
          if(res.status == true)
          {
            this.itemInCart = true
            this.cartButtonText = "Remove from cart"
          } 
          else{
            this.itemInCart = false
            this.cartButtonText = "Add to cart"
          }
        },
        err=>{
          console.log(err)
        }
      )
  }

  getProduct(id){
    this._pro.getProductById(id)
      .subscribe(
        res=>{
          console.log(res)
          this.productDetail = res
        },
        err=>{
          console.log(err)
        }
      )
  }

  getRelatedProducts(id){
      this._pro.getRelatedProducts(id)
        .subscribe(
          res=>{
            console.log(res)
            this.relatedProducts = res
          },
          err=>{
            console.log(err)
          }
        )
  }

  AddToCart(){

    if(this.itemInCart == true){
      var obj = {
        "userId" : localStorage.getItem('userId'),
        "productId" : this.productId
      }
      this._user.removeFromCart(obj)
        .subscribe(
          res=>{
            console.log(res)
            this.itemInCart = false
            this.cartButtonText = "Add to cart"
          },
          err=>{
            console.log(err)
          }
        )
    }
    else{      
        var obj = {
          "userId" : localStorage.getItem('userId'),
          "productId" : this.productId
        }
        this._user.addToCart(obj)
          .subscribe(
            res=>{
              console.log(res)
              this.itemInCart = true
              this.cartButtonText = "Remove from cart"
            },
            err=>{
              console.log(err)
            }
          )
    }
      

  }

}
