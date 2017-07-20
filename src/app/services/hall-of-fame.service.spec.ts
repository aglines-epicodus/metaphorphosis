import { TestBed, inject } from '@angular/core/testing';

import { HallOfFameService } from './hall-of-fame.service';

describe('HallOfFameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HallOfFameService]
    });
  });

  it('should be created', inject([HallOfFameService], (service: HallOfFameService) => {
    expect(service).toBeTruthy();
  }));
});
