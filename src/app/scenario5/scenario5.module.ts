import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentGrandparentSc5Component } from './component-grandparent-sc5/component-grandparent-sc5.component';
import { ComponentParentSc5Component } from './component-parent-sc5/component-parent-sc5.component';
import { ComponentChildSc5Component } from './component-child-sc5/component-child-sc5.component';

@NgModule({
  declarations: [ComponentGrandparentSc5Component, ComponentParentSc5Component, ComponentChildSc5Component],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentGrandparentSc5Component,
    ComponentParentSc5Component,
    ComponentChildSc5Component
  ]
})
export class Scenario5Module { }
