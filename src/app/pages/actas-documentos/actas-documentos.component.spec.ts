import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActasDocumentosComponent } from './actas-documentos.component';

describe('ActasDocumentosComponent', () => {
  let component: ActasDocumentosComponent;
  let fixture: ComponentFixture<ActasDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActasDocumentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActasDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
