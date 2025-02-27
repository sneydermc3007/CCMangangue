import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiprefComponent } from './sipref.component';

describe('SiprefComponent', () => {
  let component: SiprefComponent;
  let fixture: ComponentFixture<SiprefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiprefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiprefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
