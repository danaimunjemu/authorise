import { TestBed } from '@angular/core/testing';

import { SelfServiceService } from './self-service.service';

describe('SelfServiceService', () => {
  let service: SelfServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
