import { TestBed, inject } from '@angular/core/testing';

import { DisplayListService } from './display-list.service';

describe('DisplayListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayListService]
    });
  });

  it('should be created', inject([DisplayListService], (service: DisplayListService) => {
    expect(service).toBeTruthy();
  }));
});
