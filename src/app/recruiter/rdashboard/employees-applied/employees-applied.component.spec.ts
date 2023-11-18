import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesAppliedComponent } from './employees-applied.component';

describe('EmployeesAppliedComponent', () => {
  let component: EmployeesAppliedComponent;
  let fixture: ComponentFixture<EmployeesAppliedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesAppliedComponent]
    });
    fixture = TestBed.createComponent(EmployeesAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
