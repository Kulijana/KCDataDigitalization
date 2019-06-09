import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnaComponent } from './mna.component';

describe('MnaComponent', () => {
  let component: MnaComponent;
  let fixture: ComponentFixture<MnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
