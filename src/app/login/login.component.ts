import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import{HttpClient} from'@angular/common/http';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private fb:FormBuilder, private http:HttpClient,public router:Router ) { }
  login= this.fb.group({
    email: [''],
    password: [''],
  });


  ngOnInit() {

  }
loginform(value) {
    let email= this.login.get("email").value
    let password= this.login.get("password").value
    let body = {
      "email":  email,
      "password": password,
    }
    console.log(body)

   this.http.post("https://reqres.in/api/login", body ).subscribe(data => {
    console.log('data called',data)
    alert('login sucessfully')
    this.router.navigateByUrl("dashboard")
    

  })
}


    

  }


