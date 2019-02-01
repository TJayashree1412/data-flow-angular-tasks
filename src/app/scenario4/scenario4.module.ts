import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentChildComponent } from './component-child/component-child.component';
import { ComponentParentComponent } from './component-parent/component-parent.component';

@NgModule({
  declarations: [ComponentChildComponent, ComponentParentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentParentComponent,
    ComponentChildComponent
  ]
})
export class Scenario4Module { }
