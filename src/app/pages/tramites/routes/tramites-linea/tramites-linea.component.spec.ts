import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramitesLineaComponent } from './tramites-linea.component';

describe('TramitesLineaComponent', () => {
  let component: TramitesLineaComponent;
  let fixture: ComponentFixture<TramitesLineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TramitesLineaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TramitesLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
