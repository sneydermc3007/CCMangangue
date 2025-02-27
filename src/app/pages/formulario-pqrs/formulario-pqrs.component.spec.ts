import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPqrsComponent } from './formulario-pqrs.component';

describe('FormularioPqrsComponent', () => {
  let component: FormularioPqrsComponent;
  let fixture: ComponentFixture<FormularioPqrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPqrsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
