import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentChild1Sc6Component } from './component-child1-sc6.component';

describe('ComponentChild1Sc6Component', () => {
  let component: ComponentChild1Sc6Component;
  let fixture: ComponentFixture<ComponentChild1Sc6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentChild1Sc6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentChild1Sc6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
