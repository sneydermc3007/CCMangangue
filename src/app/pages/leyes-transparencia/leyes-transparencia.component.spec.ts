import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyesTransparenciaComponent } from './leyes-transparencia.component';

describe('LeyesTransparenciaComponent', () => {
  let component: LeyesTransparenciaComponent;
  let fixture: ComponentFixture<LeyesTransparenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeyesTransparenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeyesTransparenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
