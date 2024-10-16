import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosPublicosComponent } from './registros-publicos.component';

describe('RegistrosPublicosComponent', () => {
  let component: RegistrosPublicosComponent;
  let fixture: ComponentFixture<RegistrosPublicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrosPublicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrosPublicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
