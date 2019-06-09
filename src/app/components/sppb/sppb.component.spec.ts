import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SppbComponent } from './sppb.component';

describe('SppbComponent', () => {
  let component: SppbComponent;
  let fixture: ComponentFixture<SppbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SppbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SppbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
