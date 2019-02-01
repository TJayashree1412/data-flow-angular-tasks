import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-parent-sc5',
  templateUrl: './component-parent-sc5.component.html',
  styleUrls: ['./component-parent-sc5.component.css']
})
export class ComponentParentSc5Component implements OnInit {
  parentValue;
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }
  ngOnInit() {
  }
  passMessage(value) {
    this.messageEvent.emit(value);
     // console.log('child:', this.childValue);
   }
}
