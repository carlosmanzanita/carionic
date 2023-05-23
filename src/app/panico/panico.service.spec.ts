import { TestBed } from '@angular/core/testing';

import { PanicoService } from './panico.service';

describe('PanicoService', () => {
  let service: PanicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
