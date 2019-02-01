import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-child-sc3',
  templateUrl: './component-child-sc3.component.html',
  styleUrls: ['./component-child-sc3.component.css']
})
export class ComponentChildSc3Component implements OnInit {

  constructor() { }
  @Input() childValue: any;
  ngOnInit() {
  }

}
