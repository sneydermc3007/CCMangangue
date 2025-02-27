import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorioColaboradoresContratistasComponent } from './directorio-colaboradores-contratistas.component';

describe('DirectorioColaboradoresContratistasComponent', () => {
  let component: DirectorioColaboradoresContratistasComponent;
  let fixture: ComponentFixture<DirectorioColaboradoresContratistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorioColaboradoresContratistasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorioColaboradoresContratistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
