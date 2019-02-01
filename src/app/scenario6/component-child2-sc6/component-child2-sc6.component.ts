import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-child2-sc6',
  templateUrl: './component-child2-sc6.component.html',
  styleUrls: ['./component-child2-sc6.component.css']
})
export class ComponentChild2Sc6Component implements OnInit {

  constructor() { }
  @Input() child2Value: any;
  ngOnInit() {
  }

}
