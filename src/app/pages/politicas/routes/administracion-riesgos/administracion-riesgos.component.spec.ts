import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionRiesgosComponent } from './administracion-riesgos.component';

describe('AdministracionRiesgosComponent', () => {
  let component: AdministracionRiesgosComponent;
  let fixture: ComponentFixture<AdministracionRiesgosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministracionRiesgosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministracionRiesgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
