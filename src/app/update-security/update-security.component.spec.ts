import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSecurityComponent } from './update-security.component';

describe('UpdateSecurityComponent', () => {
  let component: UpdateSecurityComponent;
  let fixture: ComponentFixture<UpdateSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
