import { TestBed, inject } from '@angular/core/testing';

import { DarkSkyApiService } from './dark-sky-api.service';

describe('DarkSkyApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DarkSkyApiService]
    });
  });

  it('should be created', inject([DarkSkyApiService], (service: DarkSkyApiService) => {
    expect(service).toBeTruthy();
  }));
});
