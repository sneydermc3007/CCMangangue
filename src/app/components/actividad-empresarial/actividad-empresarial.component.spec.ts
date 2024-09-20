import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadEmpresarialComponent } from './actividad-empresarial.component';

describe('ActividadEmpresarialComponent', () => {
  let component: ActividadEmpresarialComponent;
  let fixture: ComponentFixture<ActividadEmpresarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadEmpresarialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
