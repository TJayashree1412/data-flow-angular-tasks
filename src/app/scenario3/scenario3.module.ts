import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentChildSc3Component } from './component-child-sc3/component-child-sc3.component';
import { ComponentParentSc3Component } from './component-parent-sc3/component-parent-sc3.component';

@NgModule({
  declarations: [ComponentChildSc3Component, ComponentParentSc3Component],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentParentSc3Component
  ]
})
export class Scenario3Module { }
