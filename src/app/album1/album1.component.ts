import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({ 
  selector: 'app-album1',
  templateUrl: './album1.component.html',
  styleUrls: ['./album1.component.css']
})
export class Album1Component implements OnInit {
  dtata: any
  getalbum
  totalphotos = []
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe(dta => {
    console.log(dta)
    this.dtata = dta
  })

  this.getalbum = JSON.parse(localStorage.getItem('album'))

  setTimeout(() => {
    this.comparingComments()
  }, 8000);
}

comparingComments() {
  for (var i = 0; i < this.dtata.length; i++) {
    if (this.getalbum.id == this.dtata[i].albumId) {
      this.totalphotos.push(this.dtata[i])
    }
  }
  console.log(this.totalphotos)
}
showphotos(photo)
{
  console.log(photo)
  localStorage.setItem("photo",JSON.stringify(photo))
  this.router.navigateByUrl("showphotos")
}
  

}
