import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSecurityProfileComponent } from './view-security-profile.component';

describe('ViewSecurityProfileComponent', () => {
  let component: ViewSecurityProfileComponent;
  let fixture: ComponentFixture<ViewSecurityProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSecurityProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSecurityProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
