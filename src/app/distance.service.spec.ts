import { TestBed, inject } from '@angular/core/testing';

import { DistanceService } from './distance.service';

describe('DistanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DistanceService]
    });
  });

  it('should be created', inject([DistanceService], (service: DistanceService) => {
    expect(service).toBeTruthy();
  }));
});
