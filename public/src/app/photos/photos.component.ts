import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  li:any; 
  constructor(private http : HttpClient){ 
      
  } 

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/photos') 
    .subscribe(Response => { 
      this.li=Response; 
      console.log(this.li);
    }); 
  }

}
