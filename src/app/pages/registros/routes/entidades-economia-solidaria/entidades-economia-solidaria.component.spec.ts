import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadesEconomiaSolidariaComponent } from './entidades-economia-solidaria.component';

describe('EntidadesEconomiaSolidariaComponent', () => {
  let component: EntidadesEconomiaSolidariaComponent;
  let fixture: ComponentFixture<EntidadesEconomiaSolidariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntidadesEconomiaSolidariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntidadesEconomiaSolidariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
