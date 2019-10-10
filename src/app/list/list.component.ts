import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private aRoute:ActivatedRoute, private _pro:ProductService) { }

  productList : any 

  ngOnInit() {
    this.aRoute.params.subscribe(routeParams => {
      console.log(routeParams.id)
      this.getProducts(routeParams.id);
    });
  }

  getProducts(name){
      this._pro.getProuctsByDepartment(name)
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



}
