import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSc2Component } from './component-sc2.component';

describe('ComponentSc2Component', () => {
  let component: ComponentSc2Component;
  let fixture: ComponentFixture<ComponentSc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentSc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
