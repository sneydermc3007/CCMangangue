import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundariasComponent } from './segundarias.component';

describe('SegundariasComponent', () => {
  let component: SegundariasComponent;
  let fixture: ComponentFixture<SegundariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SegundariasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
