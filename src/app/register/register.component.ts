import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  totaldata: Object;
  fulldata: Object;


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(data => {
      console.log(data)
      this.totaldata = data
    })
  }
  get(a) {
    console.log(a)
    localStorage.setItem("data", JSON.stringify(a))
    this.router.navigateByUrl("posts")
  }

  }


