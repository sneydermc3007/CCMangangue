import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoriaDetailComponent } from './convocatoria-detail.component';

describe('ConvocatoriaDetailComponent', () => {
  let component: ConvocatoriaDetailComponent;
  let fixture: ComponentFixture<ConvocatoriaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvocatoriaDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvocatoriaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
