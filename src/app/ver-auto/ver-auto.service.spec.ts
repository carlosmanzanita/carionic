import { TestBed } from '@angular/core/testing';

import { VerAutoService } from './ver-auto.service';

describe('VerAutoService', () => {
  let service: VerAutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerAutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
