import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasInformacionComponent } from './sistemas-informacion.component';

describe('SistemasInformacionComponent', () => {
  let component: SistemasInformacionComponent;
  let fixture: ComponentFixture<SistemasInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemasInformacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemasInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
