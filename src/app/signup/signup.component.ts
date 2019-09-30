import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import{Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup:FormGroup;
  constructor(public router:Router,private fb:FormBuilder,private http: HttpClient) { 
    this.signup = this.fb.group({
      Email: [''],
      password: [''],
      confirmpassword: ['']
    })
  }

  ngOnInit() {
  }
  sig(value) {
    let Email= this.signup.get("Email").value
    let password= this.signup.get("password").value
    let confirmpassword= this.signup.get("confirmpassword").value
    let body = {
      "Email": Email,
      "password": password,
      "confirmpassword": confirmpassword
    }
    console.log(body)
    if (password==confirmpassword){
    return this.http.get("").subscribe(data => {
      console.log(data)
       this.router.navigate(["/login"])
    })
  }
  
  }
 }


