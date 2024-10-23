import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositosFinancierosComponent } from './depositos-financieros.component';

describe('DepositosFinancierosComponent', () => {
  let component: DepositosFinancierosComponent;
  let fixture: ComponentFixture<DepositosFinancierosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepositosFinancierosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositosFinancierosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
