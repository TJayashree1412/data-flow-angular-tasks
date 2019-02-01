import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentParentSc6Component } from './component-parent-sc6/component-parent-sc6.component';
import { ComponentChild1Sc6Component } from './component-child1-sc6/component-child1-sc6.component';
import { ComponentChild2Sc6Component } from './component-child2-sc6/component-child2-sc6.component';

@NgModule({
  declarations: [ComponentParentSc6Component, ComponentChild1Sc6Component, ComponentChild2Sc6Component],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentParentSc6Component,
    ComponentChild1Sc6Component,
    ComponentChild2Sc6Component
  ]
})
export class Scenario6Module { }
