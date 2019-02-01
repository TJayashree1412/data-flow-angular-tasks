import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-child1-sc6',
  templateUrl: './component-child1-sc6.component.html',
  styleUrls: ['./component-child1-sc6.component.css']
})
export class ComponentChild1Sc6Component implements OnInit {
  childValue;
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }
  print(value) {
    this.messageEvent.emit(value);
     // console.log('child:', this.childValue);
  }
  ngOnInit() {
  }

}
