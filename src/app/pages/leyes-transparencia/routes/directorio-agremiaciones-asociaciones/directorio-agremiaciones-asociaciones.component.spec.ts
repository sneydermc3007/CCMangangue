import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorioAgremiacionesAsociacionesComponent } from './directorio-agremiaciones-asociaciones.component';

describe('DirectorioAgremiacionesAsociacionesComponent', () => {
  let component: DirectorioAgremiacionesAsociacionesComponent;
  let fixture: ComponentFixture<DirectorioAgremiacionesAsociacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorioAgremiacionesAsociacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorioAgremiacionesAsociacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
