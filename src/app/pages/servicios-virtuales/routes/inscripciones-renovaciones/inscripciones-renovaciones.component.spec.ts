import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionesRenovacionesComponent } from './inscripciones-renovaciones.component';

describe('InscripcionesRenovacionesComponent', () => {
  let component: InscripcionesRenovacionesComponent;
  let fixture: ComponentFixture<InscripcionesRenovacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InscripcionesRenovacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionesRenovacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
