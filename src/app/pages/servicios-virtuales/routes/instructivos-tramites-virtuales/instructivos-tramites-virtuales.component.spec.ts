import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructivosTramitesVirtualesComponent } from './instructivos-tramites-virtuales.component';

describe('InstructivosTramitesVirtualesComponent', () => {
  let component: InstructivosTramitesVirtualesComponent;
  let fixture: ComponentFixture<InstructivosTramitesVirtualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstructivosTramitesVirtualesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructivosTramitesVirtualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
