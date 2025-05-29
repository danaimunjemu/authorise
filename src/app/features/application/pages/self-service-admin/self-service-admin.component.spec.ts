import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfServiceAdminComponent } from './self-service-admin.component';

describe('SelfServiceAdminComponent', () => {
  let component: SelfServiceAdminComponent;
  let fixture: ComponentFixture<SelfServiceAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelfServiceAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfServiceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
