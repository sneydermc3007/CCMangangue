import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadesAnimoLucroComponent } from './entidades-animo-lucro.component';

describe('EntidadesAnimoLucroComponent', () => {
  let component: EntidadesAnimoLucroComponent;
  let fixture: ComponentFixture<EntidadesAnimoLucroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntidadesAnimoLucroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntidadesAnimoLucroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
