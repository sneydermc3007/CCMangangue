import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesibilidadMediosElectronicosPoblocacionComponent } from './accesibilidad-medios-electronicos-poblocacion.component';

describe('AccesibilidadMediosElectronicosPoblocacionComponent', () => {
  let component: AccesibilidadMediosElectronicosPoblocacionComponent;
  let fixture: ComponentFixture<AccesibilidadMediosElectronicosPoblocacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesibilidadMediosElectronicosPoblocacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesibilidadMediosElectronicosPoblocacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
