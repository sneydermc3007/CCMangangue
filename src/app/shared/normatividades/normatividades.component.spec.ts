import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormatividadesComponent } from './normatividades.component';

describe('NormatividadesComponent', () => {
  let component: NormatividadesComponent;
  let fixture: ComponentFixture<NormatividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NormatividadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormatividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
