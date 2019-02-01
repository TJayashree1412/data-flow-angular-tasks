import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentChild2Sc6Component } from './component-child2-sc6.component';

describe('ComponentChild2Sc6Component', () => {
  let component: ComponentChild2Sc6Component;
  let fixture: ComponentFixture<ComponentChild2Sc6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentChild2Sc6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentChild2Sc6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
