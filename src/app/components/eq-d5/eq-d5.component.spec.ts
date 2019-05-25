import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EqD5Component } from './eq-d5.component';

describe('EqD5Component', () => {
  let component: EqD5Component;
  let fixture: ComponentFixture<EqD5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqD5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqD5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
