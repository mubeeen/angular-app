import { Component, OnInit } from '@angular/core';
import { user } from './user.model';
import {HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  li:any; 
  lis=[]; 
  constructor(private http : HttpClient){ 
      
  } 

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users') 
    .subscribe(Response => { 
      //console.log(Response) 
      this.li=Response; 
      //console.log(this.li);
    }); 
  }

}
