import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDeletionComponent } from './reservation-deletion.component';

describe('ReservationDeletionComponent', () => {
  let component: ReservationDeletionComponent;
  let fixture: ComponentFixture<ReservationDeletionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationDeletionComponent]
    });
    fixture = TestBed.createComponent(ReservationDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
