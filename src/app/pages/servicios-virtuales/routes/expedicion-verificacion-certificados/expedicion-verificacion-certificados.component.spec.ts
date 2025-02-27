import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedicionVerificacionCertificadosComponent } from './expedicion-verificacion-certificados.component';

describe('ExpedicionVerificacionCertificadosComponent', () => {
  let component: ExpedicionVerificacionCertificadosComponent;
  let fixture: ComponentFixture<ExpedicionVerificacionCertificadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpedicionVerificacionCertificadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpedicionVerificacionCertificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
