import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-child',
  templateUrl: './component-child.component.html',
  styleUrls: ['./component-child.component.css']
})
export class ComponentChildComponent implements OnInit {
  childValue ;
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }
  print(value) {
   // console.log("saciutiucsa"+value);
    this.messageEvent.emit(value);
  }
  ngOnInit() {
  }

}
