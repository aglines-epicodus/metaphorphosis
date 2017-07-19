import { TestBed, inject } from '@angular/core/testing';

import { DatamuseService } from './datamuse.service';

describe('DatamuseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatamuseService]
    });
  });

  it('should be created', inject([DatamuseService], (service: DatamuseService) => {
    expect(service).toBeTruthy();
  }));
});
