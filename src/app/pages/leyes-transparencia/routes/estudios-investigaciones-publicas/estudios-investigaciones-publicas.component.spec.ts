import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosInvestigacionesPublicasComponent } from './estudios-investigaciones-publicas.component';

describe('EstudiosInvestigacionesPublicasComponent', () => {
  let component: EstudiosInvestigacionesPublicasComponent;
  let fixture: ComponentFixture<EstudiosInvestigacionesPublicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudiosInvestigacionesPublicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiosInvestigacionesPublicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
