import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  title = 'ngcanvas';
  constructor() { }

  ngOnInit(): void {
    var observable = Observable.create();
  }

}
