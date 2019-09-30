import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  

  commentdata = []
  data2: any;
  data: any;

  constructor(private http:HttpClient, private router:Router) { 
   
  }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem("data"))
    this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe(data1=>{
      console.log(data1)
      this.data2=data1;
    })
    
    setTimeout(() => {
      this.comparingComments()
    }, 2000);
    
  }
​
  comparingComments(){
    for (var i = 0; i < this.data2.length; i++) {
      if (this.data.userId == this.data2[i].postId) {
        this.commentdata.push(this.data2[i])
      }
    }
    console.log(this.commentdata)
  }

    
  }


