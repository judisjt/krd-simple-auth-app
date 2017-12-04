import { TestBed, inject } from '@angular/core/testing';

import { SmartAuthService } from './auth-service.service';

describe('AuthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmartAuthService]
    });
  });

  it('should be created', inject([SmartAuthService], (service: SmartAuthService) => {
    expect(service).toBeTruthy();
  }));
});
