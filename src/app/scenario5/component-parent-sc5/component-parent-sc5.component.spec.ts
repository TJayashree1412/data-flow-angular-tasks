import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentParentSc5Component } from './component-parent-sc5.component';

describe('ComponentParentSc5Component', () => {
  let component: ComponentParentSc5Component;
  let fixture: ComponentFixture<ComponentParentSc5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentParentSc5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentParentSc5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
