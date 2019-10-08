import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  signupForm = this.fb.group({
    userEmail:['',[Validators.required,Validators.email]],
    userFirstName : ['',[Validators.required,Validators.pattern('^[A-Za-z]+$')]],
    userLastName : ['',[Validators.required,Validators.pattern('^[A-Za-z]+$')]],
    userMobile : ['',[Validators.required, Validators.pattern('^[0-9]*$')]],
    userPassword : ['',[Validators.required,Validators.minLength(3)]]
  })

}
