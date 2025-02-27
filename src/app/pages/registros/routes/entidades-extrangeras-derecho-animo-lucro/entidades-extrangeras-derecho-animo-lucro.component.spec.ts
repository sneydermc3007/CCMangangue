import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadesExtrangerasDerechoAnimoLucroComponent } from './entidades-extrangeras-derecho-animo-lucro.component';

describe('EntidadesExtrangerasDerechoAnimoLucroComponent', () => {
  let component: EntidadesExtrangerasDerechoAnimoLucroComponent;
  let fixture: ComponentFixture<EntidadesExtrangerasDerechoAnimoLucroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntidadesExtrangerasDerechoAnimoLucroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntidadesExtrangerasDerechoAnimoLucroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
