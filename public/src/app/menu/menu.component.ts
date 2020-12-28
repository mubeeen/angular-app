import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  show = true;

  constructor() { }

  ngOnInit(): void 
  {
    
  }
  IsShow()
  {
    this.show = !this.show;
  }
}
