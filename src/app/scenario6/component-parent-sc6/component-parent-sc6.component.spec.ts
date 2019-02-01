import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentParentSc6Component } from './component-parent-sc6.component';

describe('ComponentParentSc6Component', () => {
  let component: ComponentParentSc6Component;
  let fixture: ComponentFixture<ComponentParentSc6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentParentSc6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentParentSc6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
