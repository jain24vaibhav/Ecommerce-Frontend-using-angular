import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder, private _user:UserService, private _route:Router) { }

  ngOnInit() {
  }

  signupError : string

  signupForm = this.fb.group({
    userEmail:['',[Validators.required,Validators.email]],
    userFirstName : ['',[Validators.required,Validators.pattern('^[A-Za-z]+$')]],
    userLastName : ['',[Validators.required,Validators.pattern('^[A-Za-z]+$')]],
    userMobile : ['',[Validators.required, Validators.pattern('^[0-9]*$')]],
    userPassword : ['',[Validators.required,Validators.minLength(3)]]
  })

  signup(){
    this._user.signup(this.signupForm.value)
      .subscribe(
        res=>{
          console.log(res)
          localStorage.setItem('token',res.token.toString())
          localStorage.setItem('userId',res.userId.toString())
          this._route.navigate(['/user'])
        },
        err=>{
          console.log(err)
          this.signupError = err.error.message
        }
      )
  }

}
