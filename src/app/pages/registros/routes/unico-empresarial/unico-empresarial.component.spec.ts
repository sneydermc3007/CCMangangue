import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicoEmpresarialComponent } from './unico-empresarial.component';

describe('UnicoEmpresarialComponent', () => {
  let component: UnicoEmpresarialComponent;
  let fixture: ComponentFixture<UnicoEmpresarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnicoEmpresarialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnicoEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
