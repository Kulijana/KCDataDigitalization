import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeriatricAssessmentComponent } from './geriatric-assessment.component';

describe('GeriatricAssessmentComponent', () => {
  let component: GeriatricAssessmentComponent;
  let fixture: ComponentFixture<GeriatricAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeriatricAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeriatricAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
