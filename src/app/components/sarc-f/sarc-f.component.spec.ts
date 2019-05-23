import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SarcFComponent } from './sarc-f.component';

describe('SarcFComponent', () => {
  let component: SarcFComponent;
  let fixture: ComponentFixture<SarcFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SarcFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SarcFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
