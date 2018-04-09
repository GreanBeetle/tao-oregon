import { TestBed, inject } from '@angular/core/testing';

import { TrailService } from './trail.service';

describe('TrailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrailService]
    });
  });

  it('should be created', inject([TrailService], (service: TrailService) => {
    expect(service).toBeTruthy();
  }));
});
