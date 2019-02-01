import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-sc2',
  templateUrl: './component-sc2.component.html',
  styleUrls: ['./component-sc2.component.css']
})
export class ComponentSc2Component implements OnInit {
  values;
  constructor() { }
  print(value) {
    this.values = value;
  }
  ngOnInit() {
  }

}
