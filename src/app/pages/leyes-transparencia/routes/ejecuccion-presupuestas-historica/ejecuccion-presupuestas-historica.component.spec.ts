import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecuccionPresupuestasHistoricaComponent } from './ejecuccion-presupuestas-historica.component';

describe('EjecuccionPresupuestasHistoricaComponent', () => {
  let component: EjecuccionPresupuestasHistoricaComponent;
  let fixture: ComponentFixture<EjecuccionPresupuestasHistoricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjecuccionPresupuestasHistoricaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjecuccionPresupuestasHistoricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
