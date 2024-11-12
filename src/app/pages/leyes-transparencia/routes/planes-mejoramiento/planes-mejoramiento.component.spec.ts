import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesMejoramientoComponent } from './planes-mejoramiento.component';

describe('PlanesMejoramientoComponent', () => {
  let component: PlanesMejoramientoComponent;
  let fixture: ComponentFixture<PlanesMejoramientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanesMejoramientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanesMejoramientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
