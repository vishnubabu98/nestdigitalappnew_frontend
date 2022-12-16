import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpLogEntryComponent } from './add-emp-log-entry.component';

describe('AddEmpLogEntryComponent', () => {
  let component: AddEmpLogEntryComponent;
  let fixture: ComponentFixture<AddEmpLogEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmpLogEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmpLogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
