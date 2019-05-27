import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf36Component } from './sf36.component';

describe('Sf36Component', () => {
  let component: Sf36Component;
  let fixture: ComponentFixture<Sf36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sf36Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
