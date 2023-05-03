import { TestBed } from '@angular/core/testing';

import { ModalidadAventonService } from './modalidad-aventon.service';

describe('ModalidadAventonService', () => {
  let service: ModalidadAventonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalidadAventonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
