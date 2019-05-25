import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmseComponent } from './mmse.component';

describe('MmseComponent', () => {
  let component: MmseComponent;
  let fixture: ComponentFixture<MmseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
