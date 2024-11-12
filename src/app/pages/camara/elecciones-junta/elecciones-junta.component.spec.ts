import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleccionesJuntaComponent } from './elecciones-junta.component';

describe('EleccionesJuntaComponent', () => {
  let component: EleccionesJuntaComponent;
  let fixture: ComponentFixture<EleccionesJuntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EleccionesJuntaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EleccionesJuntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
