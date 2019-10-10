import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private _user:UserService, private _route:Router) { }

  ngOnInit() {
  }

  loginError : string

  loginForm = this.fb.group({
    userEmail : ['',[Validators.required, Validators.email]],
    userPassword : ['', [Validators.required,Validators.minLength(3)]]
  })

  login(){
    this._user.login(this.loginForm.value)
      .subscribe(
        res=>{
          console.log(res)
          localStorage.setItem('token',res.token.toString())
          localStorage.setItem('userId',res.userId.toString())
          this._route.navigate(['/user'])
        },
        err=>{
          console.log(err)
          this.loginError = err.error.message
        }
      )
  }

}
