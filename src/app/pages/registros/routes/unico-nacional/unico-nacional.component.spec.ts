import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicoNacionalComponent } from './unico-nacional.component';

describe('UnicoNacionalComponent', () => {
  let component: UnicoNacionalComponent;
  let fixture: ComponentFixture<UnicoNacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnicoNacionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnicoNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
