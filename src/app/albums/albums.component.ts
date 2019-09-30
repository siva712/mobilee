import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  data: Object;

  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/albums").subscribe(data=>{
console.log(data)

this.data=data;
    })
  }
  add(a) {
    console.log(a)
    localStorage.setItem("album", JSON.stringify(a))
    this.route.navigateByUrl("album1")
  }
 

}
