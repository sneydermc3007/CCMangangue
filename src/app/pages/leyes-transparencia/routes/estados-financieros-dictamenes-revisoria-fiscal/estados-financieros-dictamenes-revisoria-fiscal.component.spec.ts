import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosFinancierosDictamenesRevisoriaFiscalComponent } from './estados-financieros-dictamenes-revisoria-fiscal.component';

describe('EstadosFinancierosDictamenesRevisoriaFiscalComponent', () => {
  let component: EstadosFinancierosDictamenesRevisoriaFiscalComponent;
  let fixture: ComponentFixture<EstadosFinancierosDictamenesRevisoriaFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadosFinancierosDictamenesRevisoriaFiscalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadosFinancierosDictamenesRevisoriaFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
