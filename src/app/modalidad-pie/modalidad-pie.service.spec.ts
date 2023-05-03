import { TestBed } from '@angular/core/testing';

import { ModalidadPieService } from './modalidad-pie.service';

describe('ModalidadPieService', () => {
  let service: ModalidadPieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalidadPieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
