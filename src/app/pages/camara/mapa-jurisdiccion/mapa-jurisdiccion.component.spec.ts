import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaJurisdiccionComponent } from './mapa-jurisdiccion.component';

describe('MapaJurisdiccionComponent', () => {
  let component: MapaJurisdiccionComponent;
  let fixture: ComponentFixture<MapaJurisdiccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapaJurisdiccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaJurisdiccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
