import { TestBed } from '@angular/core/testing';

import { ShopeService } from './shope.service';

describe('ShopeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopeService = TestBed.get(ShopeService);
    expect(service).toBeTruthy();
  });
});
