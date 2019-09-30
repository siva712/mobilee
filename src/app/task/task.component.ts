import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import{HttpClient} from'@angular/common/http';
import{Router} from '@angular/router';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

public task;

  constructor(private fb:FormBuilder, private http:HttpClient,public router:Router) { }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe( data => {
      this.task=data;
      console.log(data)
    })

  }
  
  create() {
    this.router.navigateByUrl("task1")
  }

  }

