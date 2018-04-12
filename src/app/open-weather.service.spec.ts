import { TestBed, inject } from '@angular/core/testing';

import { OpenWeatherService } from './open-weather.service';

describe('OpenWeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenWeatherService]
    });
  });

  it('should be created', inject([OpenWeatherService], (service: OpenWeatherService) => {
    expect(service).toBeTruthy();
  }));
});
