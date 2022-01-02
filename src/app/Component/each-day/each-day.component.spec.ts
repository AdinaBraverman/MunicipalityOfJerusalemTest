import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachDayComponent } from './each-day.component';

describe('EachDayComponent', () => {
  let component: EachDayComponent;
  let fixture: ComponentFixture<EachDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EachDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
