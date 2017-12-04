import { TestBed, inject } from '@angular/core/testing';

import { EpicoauthService } from './epicoauth.service';

describe('EpicoauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EpicoauthService]
    });
  });

  it('should be created', inject([EpicoauthService], (service: EpicoauthService) => {
    expect(service).toBeTruthy();
  }));
});
