import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent implements OnInit {

  public item: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
          let myItem = params['item'];
          console.log(myItem);                                                  // Print the parameter to the console. 
      });
  }

  ngOnInit(): void {}
  

}
