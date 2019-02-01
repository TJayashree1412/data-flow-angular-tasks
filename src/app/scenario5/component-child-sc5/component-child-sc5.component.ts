import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-child-sc5',
  templateUrl: './component-child-sc5.component.html',
  styleUrls: ['./component-child-sc5.component.css']
})
export class ComponentChildSc5Component implements OnInit {
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
