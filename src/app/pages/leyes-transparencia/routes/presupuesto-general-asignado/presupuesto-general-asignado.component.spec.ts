import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoGeneralAsignadoComponent } from './presupuesto-general-asignado.component';

describe('PresupuestoGeneralAsignadoComponent', () => {
  let component: PresupuestoGeneralAsignadoComponent;
  let fixture: ComponentFixture<PresupuestoGeneralAsignadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresupuestoGeneralAsignadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresupuestoGeneralAsignadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
