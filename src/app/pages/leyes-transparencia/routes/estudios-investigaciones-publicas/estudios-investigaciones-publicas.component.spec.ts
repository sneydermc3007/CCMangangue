import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstudiosInvestigacionesPublicasComponent } from './estudios-investigaciones-publicas.component';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { SharedModule } from '../../../../shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('EstudiosInvestigacionesPublicasComponent', () => {
  let component: EstudiosInvestigacionesPublicasComponent;
  let fixture: ComponentFixture<EstudiosInvestigacionesPublicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EstudiosInvestigacionesPublicasComponent,
        TabViewModule,
        TableModule,
        SharedModule,
        NoopAnimationsModule // Necesario para componentes PrimeNG con animaciones
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiosInvestigacionesPublicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have tabs defined', () => {
    expect(component.tabs).toBeDefined();
    expect(component.tabs.length).toBeGreaterThan(0);
  });

  it('should open PDF in new window when abrirPDF is called', () => {
    // Arrange
    spyOn(window, 'open');
    const testUrl = 'https://example.com/test.pdf';

    // Act
    component.abrirPDF(testUrl);

    // Assert
    expect(window.open).toHaveBeenCalledWith(testUrl, '_blank');
  });
});
