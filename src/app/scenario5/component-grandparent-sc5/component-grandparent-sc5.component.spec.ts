import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentGrandparentSc5Component } from './component-grandparent-sc5.component';

describe('ComponentGrandparentSc5Component', () => {
  let component: ComponentGrandparentSc5Component;
  let fixture: ComponentFixture<ComponentGrandparentSc5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentGrandparentSc5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentGrandparentSc5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
