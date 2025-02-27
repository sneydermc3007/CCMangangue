import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionCamaraComponent } from './informacion-camara.component';

describe('InformacionCamaraComponent', () => {
  let component: InformacionCamaraComponent;
  let fixture: ComponentFixture<InformacionCamaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformacionCamaraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionCamaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
