import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicoProponentesComponent } from './unico-proponentes.component';

describe('UnicoProponentesComponent', () => {
  let component: UnicoProponentesComponent;
  let fixture: ComponentFixture<UnicoProponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnicoProponentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnicoProponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
