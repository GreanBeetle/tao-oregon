import { TestBed, inject } from '@angular/core/testing';

import { OpenWeatherApiServiceService } from './open-weather-api-service.service';

describe('OpenWeatherApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenWeatherApiServiceService]
    });
  });

  it('should be created', inject([OpenWeatherApiServiceService], (service: OpenWeatherApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
