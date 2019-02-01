import { ComponentChildComponent } from './../component-child/component-child.component';
import { Component, AfterViewInit, ViewChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-component-parent',
  templateUrl: './component-parent.component.html',
  styleUrls: ['./component-parent.component.css']
})
// export class ComponentParentComponent implements AfterContentInit {
//   parentValue;
//   constructor() { }
//   @ViewChild(ComponentChildComponent) childReference;
//   ngAfterContentInit() {
//     this.parentValue = this.childReference.childValue;
//     console.log('parent:', this.parentValue);
//   }

  export class ComponentParentComponent implements AfterViewInit {

    @ViewChild(ComponentChildComponent) childRef;
    constructor() { }
    message: string;
    ngAfterViewInit() {
      this.message = this.childRef.childValue;
    }

}
