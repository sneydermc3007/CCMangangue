import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumbreMercantilComponent } from './costumbre-mercantil.component';

describe('CostumbreMercantilComponent', () => {
  let component: CostumbreMercantilComponent;
  let fixture: ComponentFixture<CostumbreMercantilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostumbreMercantilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostumbreMercantilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
