import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformePeticionesQuejasReclamosComponent } from './informe-peticiones-quejas-reclamos.component';

describe('InformePeticionesQuejasReclamosComponent', () => {
  let component: InformePeticionesQuejasReclamosComponent;
  let fixture: ComponentFixture<InformePeticionesQuejasReclamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformePeticionesQuejasReclamosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformePeticionesQuejasReclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
