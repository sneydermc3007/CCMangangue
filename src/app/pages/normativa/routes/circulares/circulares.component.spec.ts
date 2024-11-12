import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularesComponent } from './circulares.component';

describe('CircularesComponent', () => {
  let component: CircularesComponent;
  let fixture: ComponentFixture<CircularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircularesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
