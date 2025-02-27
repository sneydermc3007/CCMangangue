import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanismosAtencionComponent } from './mecanismos-atencion.component';

describe('MecanismosAtencionComponent', () => {
  let component: MecanismosAtencionComponent;
  let fixture: ComponentFixture<MecanismosAtencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MecanismosAtencionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MecanismosAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
