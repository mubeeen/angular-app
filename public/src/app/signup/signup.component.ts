import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReversePipe } from '../reverse.pipe';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  genders = ['male','female'];
  submit = false;
  user = {
    Fname:'',
    Lname:'',
    gender:'',
    email:'',
    password:'',
  };
  constructor() { }

  ngOnInit(): void {

  }

  onSubmit()
  {
    this.submit = true;
    this.user.Fname = this.signupForm.value.FirstName;
    this.user.Lname = this.signupForm.value.LastName;
    this.user.gender = this.signupForm.value.gender;
    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.password1;
  }

}
