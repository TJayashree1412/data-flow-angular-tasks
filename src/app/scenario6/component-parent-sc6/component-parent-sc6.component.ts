import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-parent-sc6',
  templateUrl: './component-parent-sc6.component.html',
  styleUrls: ['./component-parent-sc6.component.css']
})
export class ComponentParentSc6Component implements OnInit {
 parentValue;
  constructor() { }

  ngOnInit() {
  }
  receiveMessage($event) {
    this.parentValue = $event;
  }
}
