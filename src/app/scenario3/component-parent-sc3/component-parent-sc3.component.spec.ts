import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentParentSc3Component } from './component-parent-sc3.component';

describe('ComponentParentSc3Component', () => {
  let component: ComponentParentSc3Component;
  let fixture: ComponentFixture<ComponentParentSc3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentParentSc3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentParentSc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
