import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeyesTransparenciaComponent } from './admin-leyes-transparencia.component';

describe('AdminLeyesTransparenciaComponent', () => {
  let component: AdminLeyesTransparenciaComponent;
  let fixture: ComponentFixture<AdminLeyesTransparenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminLeyesTransparenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLeyesTransparenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
