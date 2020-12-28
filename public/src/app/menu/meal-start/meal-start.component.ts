import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-start',
  templateUrl: './meal-start.component.html',
  styleUrls: ['./meal-start.component.css']
})
export class MealStartComponent implements OnInit {

  constructor() { }

  foods = [
    "Burger",
    "Pizza",
    "Cake and biscuits",
    "Cold Drinks"
  ];
  
  ngOnInit(): void {
  }

}
