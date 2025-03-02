import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincipalesComponent } from './principales.component';
import { NoticiasService } from '../../../services/noticias/noticias.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

// Mock de datos de noticias
const NOTICIAS_MOCK = [
  { id: 1, titulo: 'Noticia 1', estado: 'Activo', tipo: 'Principal' },
  { id: 2, titulo: 'Noticia 2', estado: 'Inactivo', tipo: 'Principal' },
  { id: 3, titulo: 'Noticia 3', estado: 'Activo', tipo: 'Principal' }
];

// Mock del servicio de noticias
class MockNoticiasService {
  getNoticias(tipo: string) {
    return of(NOTICIAS_MOCK);
  }
}

describe('PrincipalesComponent', () => {
  let component: PrincipalesComponent;
  let fixture: ComponentFixture<PrincipalesComponent>;
  let noticiasService: NoticiasService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincipalesComponent],
      providers: [
        { provide: NoticiasService, useClass: MockNoticiasService },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalesComponent);
    component = fixture.componentInstance;
    noticiasService = TestBed.inject(NoticiasService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load and filter active noticias on init', () => {
    // El componente ya ha llamado a ngOnInit en fixture.detectChanges()
    expect(component.noticias.length).toBe(2); // Solo las noticias activas
    expect(component.noticias[0].titulo).toBe('Noticia 1');
    expect(component.noticias[1].titulo).toBe('Noticia 3');
  });

  it('should navigate to noticia detail when navigateToNoticia is called', () => {
    // Act
    component.navigateToNoticia(1);

    // Assert
    expect(router.navigate).toHaveBeenCalledWith(['/noticias', 1]);
  });

  it('should call getNoticias with "Principal" parameter', () => {
    // Arrange
    const spy = spyOn(noticiasService, 'getNoticias').and.returnValue(of(NOTICIAS_MOCK));

    // Act
    component.ngOnInit();

    // Assert
    expect(spy).toHaveBeenCalledWith('Principal');
  });
});
