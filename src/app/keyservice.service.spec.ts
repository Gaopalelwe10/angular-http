import { TestBed } from '@angular/core/testing';

import { KeyserviceService } from './keyservice.service';

describe('KeyserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeyserviceService = TestBed.get(KeyserviceService);
    expect(service).toBeTruthy();
  });
});
