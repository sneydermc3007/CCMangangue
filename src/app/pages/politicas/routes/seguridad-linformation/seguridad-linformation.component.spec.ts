import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadLinformationComponent } from './seguridad-linformation.component';

describe('SeguridadLinformationComponent', () => {
  let component: SeguridadLinformationComponent;
  let fixture: ComponentFixture<SeguridadLinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeguridadLinformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguridadLinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
