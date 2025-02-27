import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesGestionComponent } from './informes-gestion.component';

describe('InformesGestionComponent', () => {
  let component: InformesGestionComponent;
  let fixture: ComponentFixture<InformesGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformesGestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformesGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
