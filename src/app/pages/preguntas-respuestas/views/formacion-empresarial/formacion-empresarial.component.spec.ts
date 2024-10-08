import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionEmpresarialComponent } from './formacion-empresarial.component';

describe('FormacionEmpresarialComponent', () => {
  let component: FormacionEmpresarialComponent;
  let fixture: ComponentFixture<FormacionEmpresarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormacionEmpresarialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormacionEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
