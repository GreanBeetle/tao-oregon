import { TestBed, inject } from '@angular/core/testing';

import { AirQualityApiService } from './air-quality-api.service';

describe('AirQualityApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirQualityApiService]
    });
  });

  it('should be created', inject([AirQualityApiService], (service: AirQualityApiService) => {
    expect(service).toBeTruthy();
  }));
});
