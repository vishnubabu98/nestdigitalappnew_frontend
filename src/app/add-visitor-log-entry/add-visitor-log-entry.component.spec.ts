import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisitorLogEntryComponent } from './add-visitor-log-entry.component';

describe('AddVisitorLogEntryComponent', () => {
  let component: AddVisitorLogEntryComponent;
  let fixture: ComponentFixture<AddVisitorLogEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVisitorLogEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVisitorLogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
