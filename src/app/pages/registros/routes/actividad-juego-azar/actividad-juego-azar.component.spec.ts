import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadJuegoAzarComponent } from './actividad-juego-azar.component';

describe('ActividadJuegoAzarComponent', () => {
  let component: ActividadJuegoAzarComponent;
  let fixture: ComponentFixture<ActividadJuegoAzarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActividadJuegoAzarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadJuegoAzarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
