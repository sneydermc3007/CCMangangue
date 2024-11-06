import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormasGeneralesComponent } from './normas-generales.component';

describe('NormasGeneralesComponent', () => {
  let component: NormasGeneralesComponent;
  let fixture: ComponentFixture<NormasGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NormasGeneralesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormasGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
