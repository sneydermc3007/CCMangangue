import { TestBed } from '@angular/core/testing';

import { LeyesTransparenciaService } from './leyes-transparencia.service';

describe('LeyesTransparenciaService', () => {
  let service: LeyesTransparenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeyesTransparenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
