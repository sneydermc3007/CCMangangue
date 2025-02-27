import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparenciaPasivaComponent } from './transparencia-pasiva.component';

describe('TransparenciaPasivaComponent', () => {
  let component: TransparenciaPasivaComponent;
  let fixture: ComponentFixture<TransparenciaPasivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransparenciaPasivaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransparenciaPasivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
