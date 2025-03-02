import { SafePipe } from './safe.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

describe('SafePipe', () => {
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DomSanitizer,
          useValue: {
            bypassSecurityTrustResourceUrl: (url: string) => url,
            sanitize: (ctx: any, value: string) => value
          }
        }
      ]
    });

    sanitizer = TestBed.inject(DomSanitizer);
  });

  it('create an instance', () => {
    const pipe = new SafePipe(sanitizer);
    expect(pipe).toBeTruthy();
  });

  it('should sanitize URLs', () => {
    const pipe = new SafePipe(sanitizer);
    const testUrl = 'https://example.com';

    // Espiar el método de sanitización
    spyOn(sanitizer, 'bypassSecurityTrustResourceUrl').and.callThrough();

    // Ejecutar el pipe
    const result = pipe.transform(testUrl);

    // Verificar que se llamó al método de sanitización
    expect(sanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith(testUrl);
    expect(result).toBe(testUrl);
  });
});
