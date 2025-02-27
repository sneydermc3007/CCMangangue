import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NacionalTurismoComponent } from './nacional-turismo.component';

describe('NacionalTurismoComponent', () => {
  let component: NacionalTurismoComponent;
  let fixture: ComponentFixture<NacionalTurismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NacionalTurismoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NacionalTurismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
