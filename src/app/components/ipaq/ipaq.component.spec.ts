import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpaqComponent } from './ipaq.component';

describe('IpaqComponent', () => {
  let component: IpaqComponent;
  let fixture: ComponentFixture<IpaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
