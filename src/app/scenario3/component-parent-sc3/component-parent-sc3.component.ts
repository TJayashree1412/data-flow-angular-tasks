import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-parent-sc3',
  templateUrl: './component-parent-sc3.component.html',
  styleUrls: ['./component-parent-sc3.component.css']
})
export class ComponentParentSc3Component implements OnInit {
  parentValue;
  constructor() { }
  print(value) {
    this.parentValue = value;
  }
  ngOnInit() {
  }

}
