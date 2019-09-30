import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showphotos',
  templateUrl: './showphotos.component.html',
  styleUrls: ['./showphotos.component.css']
})
export class ShowphotosComponent implements OnInit {
  getphoto: any
  constructor() { }

  ngOnInit() {
    this.getphoto=JSON.parse(localStorage.getItem('photo'))
  }

}
