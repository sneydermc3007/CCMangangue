import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorioAgremiacionesAsociacionesOtrosComponent } from './directorio-agremiaciones-asociaciones-otros.component';

describe('DirectorioAgremiacionesAsociacionesOtrosComponent', () => {
  let component: DirectorioAgremiacionesAsociacionesOtrosComponent;
  let fixture: ComponentFixture<DirectorioAgremiacionesAsociacionesOtrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorioAgremiacionesAsociacionesOtrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorioAgremiacionesAsociacionesOtrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
