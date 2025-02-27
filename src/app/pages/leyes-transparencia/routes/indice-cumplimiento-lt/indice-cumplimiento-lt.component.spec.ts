import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceCumplimientoLtComponent } from './indice-cumplimiento-lt.component';

describe('IndiceCumplimientoLtComponent', () => {
  let component: IndiceCumplimientoLtComponent;
  let fixture: ComponentFixture<IndiceCumplimientoLtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndiceCumplimientoLtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiceCumplimientoLtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
