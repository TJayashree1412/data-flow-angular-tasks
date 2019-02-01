import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-grandparent-sc5',
  templateUrl: './component-grandparent-sc5.component.html',
  styleUrls: ['./component-grandparent-sc5.component.css']
})
export class ComponentGrandparentSc5Component implements OnInit {
  grandparentValue;
  constructor() { }

  ngOnInit() {
  }
  receiveMessage($event) {
    this.grandparentValue = $event;
  }
}
