import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDocumentosComponent } from './cards-documentos.component';

describe('CardsDocumentosComponent', () => {
  let component: CardsDocumentosComponent;
  let fixture: ComponentFixture<CardsDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsDocumentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
