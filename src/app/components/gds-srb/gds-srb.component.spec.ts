import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdsSrbComponent } from './gds-srb.component';

describe('GdsSrbComponent', () => {
  let component: GdsSrbComponent;
  let fixture: ComponentFixture<GdsSrbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdsSrbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdsSrbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
