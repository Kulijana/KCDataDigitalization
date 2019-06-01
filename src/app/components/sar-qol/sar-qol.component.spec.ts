import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SarQolComponent } from './sar-qol.component';

describe('SarQolComponent', () => {
  let component: SarQolComponent;
  let fixture: ComponentFixture<SarQolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SarQolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SarQolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
