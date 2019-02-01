import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentChildSc5Component } from './component-child-sc5.component';

describe('ComponentChildSc5Component', () => {
  let component: ComponentChildSc5Component;
  let fixture: ComponentFixture<ComponentChildSc5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentChildSc5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentChildSc5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
