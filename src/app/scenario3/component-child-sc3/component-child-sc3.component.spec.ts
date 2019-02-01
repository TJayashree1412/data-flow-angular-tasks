import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentChildSc3Component } from './component-child-sc3.component';

describe('ComponentChildSc3Component', () => {
  let component: ComponentChildSc3Component;
  let fixture: ComponentFixture<ComponentChildSc3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentChildSc3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentChildSc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
