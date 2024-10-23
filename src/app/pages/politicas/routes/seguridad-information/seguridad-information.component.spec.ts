import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadInformationComponent } from './seguridad-information.component';

describe('SeguridadInformationComponent', () => {
  let component: SeguridadInformationComponent;
  let fixture: ComponentFixture<SeguridadInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeguridadInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguridadInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
