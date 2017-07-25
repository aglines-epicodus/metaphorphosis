import { TestBed, inject } from '@angular/core/testing';

import { MadLibService } from './mad-lib.service';

describe('MadLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MadLibService]
    });
  });

  it('should be created', inject([MadLibService], (service: MadLibService) => {
    expect(service).toBeTruthy();
  }));
});
