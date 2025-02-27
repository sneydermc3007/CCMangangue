import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicoVeeduriasCiudadanasComponent } from './publico-veedurias-ciudadanas.component';

describe('PublicoVeeduriasCiudadanasComponent', () => {
  let component: PublicoVeeduriasCiudadanasComponent;
  let fixture: ComponentFixture<PublicoVeeduriasCiudadanasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublicoVeeduriasCiudadanasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicoVeeduriasCiudadanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
