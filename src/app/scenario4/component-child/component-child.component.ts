import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-child',
  templateUrl: './component-child.component.html',
  styleUrls: ['./component-child.component.css']
})
export class ComponentChildComponent implements OnInit {
  childValue ;
  constructor() { }
  print(value) {
   // console.log("saciutiucsa"+value);
    this.childValue = value;
  }
  ngOnInit() {
  }

}
