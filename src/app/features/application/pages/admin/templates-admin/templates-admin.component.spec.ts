import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesAdminComponent } from './templates-admin.component';

describe('TemplatesAdminComponent', () => {
  let component: TemplatesAdminComponent;
  let fixture: ComponentFixture<TemplatesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplatesAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
