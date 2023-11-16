import { TestBed } from '@angular/core/testing';

import { LockGuardService } from './lock-guard.service';

describe('LockGuardService', () => {
  let service: LockGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LockGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
