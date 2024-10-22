import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercantilComponent } from './mercantil.component';

describe('MercantilComponent', () => {
  let component: MercantilComponent;
  let fixture: ComponentFixture<MercantilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MercantilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercantilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
