import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpLogEntryComponent } from './emp-log-entry.component';

describe('EmpLogEntryComponent', () => {
  let component: EmpLogEntryComponent;
  let fixture: ComponentFixture<EmpLogEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpLogEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpLogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
