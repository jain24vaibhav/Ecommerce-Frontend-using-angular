import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _user:UserService) { }
  orderHistoryList : any

  ngOnInit() {
    this._user.getOrderHistory()
      .subscribe(
        res=>{
          console.log(res)
          this.orderHistoryList = res
        },
        err=>{
          console.log(err)
        }
      )
  }

}
